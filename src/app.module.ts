import { Module } from '@nestjs/common';
import { AccountModule } from './account/account.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    AccountModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'password',
      database: 'brasilfone',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
