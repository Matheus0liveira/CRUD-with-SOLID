import { MailTrapMailProvider } from '../../providers/implementations/MailTrapMailProvider';
import { DbUsersRepository } from '../../repositories/implementations/DbUsersRepository'
import CreateUserController from './CreateUserController';
import CreateUserCase from './CreateUserUseCase';

const dbUsersRepository = new DbUsersRepository();
const mailTrapMailProvider = new MailTrapMailProvider();

const createUserUseCase = new CreateUserCase(
  dbUsersRepository,
  mailTrapMailProvider,
);

const createUserController = new CreateUserController(
  createUserUseCase,
);


export { createUserController };