import { Controller, Get } from '@nestjs/common';

@Controller('signup')
export class SignupController {
  @Get()
  async cadastrar() {
    return JSON.stringify({
      name: 'hertonmota',
    });
  }
}
