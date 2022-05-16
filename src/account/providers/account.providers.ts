import { Account } from '../entities/account.entity';

export const accountProviders = [
  {
    provide: 'ACCOUNT_REPOSITORY',
    useValue: Account,
  },
];