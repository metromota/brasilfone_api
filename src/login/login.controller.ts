import { Body, Controller, Get, Post } from '@nestjs/common';
import LoginDto from './dtos/login-dto';

@Controller('login')
export class LoginController {
  @Post()
  async sendLogin(@Body() logindto: LoginDto) {
    const { username, password } = logindto;
    return JSON.stringify({ username, password });
  }
}
