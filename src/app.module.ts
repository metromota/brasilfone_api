import { Module } from '@nestjs/common';
import { AccountModule } from './account/account.module';

// teste

@Module({
  imports: [AccountModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
