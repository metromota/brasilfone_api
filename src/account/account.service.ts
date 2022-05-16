import { Injectable, Inject } from '@nestjs/common';
import CreateAccountDto from './dto/create.account.dto';
import LoginAccountDto from './dto/login.account.dto';
import AccountInterface from './interfaces/account.interface';
import LoginInterface from './interfaces/login.interface';
import { Repository } from 'typeorm';
import { Account } from './entities/account.entity';


@Injectable()
export class AccountService {
  constructor( @Inject('ACCOUNT_REPOSITORY') private photoRepository: Repository<Account>,) {}

  async login(loginaccount: LoginAccountDto) {
    const { username, password } = loginaccount;
    const account: LoginInterface = { username, password };
    
    return this.photoRepository.find();
    // try login
    return { name: 'hertonmota' };
  }
  
  async createAccount(createaccount: CreateAccountDto) {
    const { name, password, email, ddi, tel, newsletter, privacy } = createaccount;
    const account: AccountInterface = { name, password, email, ddi, tel, newsletter, privacy };
    
    return this.photoRepository.find();
    // try create account
    return { name: 'hertonmota' };
  }
}
