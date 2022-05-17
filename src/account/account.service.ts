import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import CreateAccountDto from './dto/create.account.dto';
import LoginAccountDto from './dto/login.account.dto';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountService {
  constructor(
    @Inject('ACCOUNT_REPOSITORY')
    private accountRepository: Repository<Account>,
  ) {}

  async login(loginaccountdto: LoginAccountDto): Promise<Account | Error> {
    const { username, password } = loginaccountdto;
    const accountFinded: Account = await this.accountRepository.findOne({
      where: [{ email: username }, { tel: username }],
    });

    if (!accountFinded) {
      throw new HttpException('Username Dont Exists', HttpStatus.UNAUTHORIZED);
    }

    const isMatch = await bcrypt.compare(password, accountFinded.password);
    if (!isMatch) {
      throw new HttpException('Invalid Password', HttpStatus.UNAUTHORIZED);
    }

    return accountFinded;
  }

  async createAccount(
    createaccountdto: CreateAccountDto,
  ): Promise<Account | HttpException> {
    const { name, password, email, ddi, tel, newsletter, privacy } =
      createaccountdto;

    const accountExists = await this.accountRepository.findOne({
      where: [{ email: email }, { tel: tel }],
    });

    if (accountExists) {
      throw new HttpException(
        'Email or Tel already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    const saltOrRounds = 8;
    const passwordCripted = await bcrypt.hash(password, saltOrRounds);
    const account: Account = {
      name,
      password: passwordCripted,
      email,
      ddi,
      tel,
      newsletter,
      privacy,
    };
    const resultAccount: Account = await this.accountRepository.save(account);
    delete resultAccount.password;
    return resultAccount;
  }
}
