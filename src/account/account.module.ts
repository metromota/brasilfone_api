import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';

import { DatabaseModule } from '../database/database.module';
import { accountProviders } from './providers/account.providers';

@Module({
  imports:[DatabaseModule],
  controllers: [AccountController],
  providers: [AccountService, ...accountProviders],
})

export class AccountModule {}
