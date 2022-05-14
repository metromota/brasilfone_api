import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { LoginController } from './login/login.controller';
import { SignupController } from './signup/signup.controller';

@Module({
  imports: [UserModule],
  controllers: [LoginController, SignupController],
  providers: [],
})
export class AppModule {}
