import { Sequelize } from 'sequelize-typescript';
import { Account } from '../account/entities/account.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'root',
        password: 'password',
        database: 'nest',
      });
      sequelize.addModels([Account]);
      await sequelize.sync();
      return sequelize;
    },
  },
];