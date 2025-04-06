import { Test, TestingModule } from '@nestjs/testing';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

describe('LoginController', () => {
  let loginController: LoginController;

  beforeEach(async () => {
    const Login: TestingModule = await Test.createTestingModule({
      controllers: [LoginController],
      providers: [LoginService],
    }).compile();

    loginController = Login.get<LoginController>(LoginController);
  });

  describe('root', () => {
    const user = {
      ent_code: '',
      name: '',
      cont_yn: '',
      contact_yn: '',
    };
    it('should return "Hello World!"', () => {
      expect(loginController.getUser(null)).toBe('Hello World!');
    });
  });
});
