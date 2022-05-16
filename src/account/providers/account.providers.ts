import { Connection } from 'typeorm';
import { Account } from '../entities/account.entity';

export const accountProviders = [
  {
    provide: 'ACCOUNT_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Account),
    inject: ['DATABASE_CONNECTION'],
  },
];