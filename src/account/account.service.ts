import { Injectable } from '@nestjs/common';
import CreateAccountDto from './dto/create.account.dto';
import LoginAccountDto from './dto/login.account.dto';
import Account from './interfaces/account.interface';

@Injectable()
export class AccountService {
  constructor() {}

  async login(loginaccount: LoginAccountDto) {
    const { username, password } = loginaccount;
    const account: Account = { username, password };
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
