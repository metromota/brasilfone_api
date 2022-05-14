import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountService {
  async login() {
    return { name: 'hertonmota' };
  }
}
