import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { AccountService } from './account.service';
import CreateAccountDto from './dto/create.account.dto';
import LoginAccountDto from './dto/login.account.dto';

@Controller('account')
export class AccountController {
  constructor(private accountservice: AccountService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('login')
  async login(@Body() loginaccountdto: LoginAccountDto) {
    return await this.accountservice.login(loginaccountdto);
  }

  @Post('create')
  async createAccount(@Body() createaccountdto: CreateAccountDto) {
    return await this.accountservice.createAccount(createaccountdto);
  }
}
