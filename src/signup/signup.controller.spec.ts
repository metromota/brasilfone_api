import { Test, TestingModule } from '@nestjs/testing';
import { SigninupController } from './signinup.controller';

describe('SigninupController', () => {
  let controller: SigninupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SigninupController],
    }).compile();

    controller = module.get<SigninupController>(SigninupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
