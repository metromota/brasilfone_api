import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { accountProviders } from './providers/account.providers';

@Module({
  imports:[],
  controllers: [AccountController],
  providers: [AccountService, accountProviders],
})

export class AccountModule {}
