import { Body, Controller, Post } from '@nestjs/common';
import { AccountService } from './account.service';
import AccountDto from './dto/account.dto';

@Controller('account')
export class AccountController {
  constructor(private accountservice: AccountService){}

  @Post()
  async login(@Body() accountdto: AccountDto) {
    const { name } = accountdto;
    this.accountservice.login();
    return JSON.stringify({ name });
  }
}
