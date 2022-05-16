import { Injectable, Inject } from '@nestjs/common';
import CreateAccountDto from './dto/create.account.dto';
import LoginAccountDto from './dto/login.account.dto';
import { Account } from './entities/account.entity'
import AccountInterface from './interfaces/account.interface';

@Injectable()
export class AccountService {
  constructor(
    @Inject('ACCOUNT_REPOSITORY')
    private accountRepository: typeof Account
  ) {}

  async login(loginaccount: LoginAccountDto) {
    const { username, password } = loginaccount;
    const account: Account = { username, password };

    this.accountRepository

    // try login
    return { name: 'hertonmota' };
  }

  async createAccount(createaccount: CreateAccountDto) {
    const { name, password, email, ddi, tel } = createaccount;
    const account: Account = { name, password, email, ddi, tel };
    // try create account
    return { name: 'hertonmota' };
  }
}
