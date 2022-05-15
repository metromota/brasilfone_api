import { Body, Controller, Post } from '@nestjs/common';
import { AccountService } from './account.service';
import CreateAccountDto from './dto/create.account.dto';
import LoginAccountDto from './dto/login.account.dto';

@Controller('account')
export class AccountController {
  constructor(private accountservice: AccountService) {}

  @Post()
  async login(@Body() account: LoginAccountDto) {
    let logged = await this.accountservice.login(account);
    return 'logged';
  }

  @Post()
  async createAccount(@Body() account: CreateAccountDto) {
    let created = await this.accountservice.createAccount(account);
    return 'created';
  }
}
