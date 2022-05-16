import { Module } from '@nestjs/common';
import { AccountModule } from './account/account.module';
import { SequelizeModule } from '@nestjs/sequelize';

// teste 
import { DatabaseModule } from './database/database.module';

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
    DatabaseModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
