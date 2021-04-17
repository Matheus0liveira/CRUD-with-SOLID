import { DbUsersRepository } from '../../repositories/implementations/DbUsersRepository';
import ListUserController from './ListUsersController';
import ListUserUseCase from './listUsersUseCase';

const dbUserRepository = new DbUsersRepository();

const listUserUseCase = new ListUserUseCase(dbUserRepository);

const listUserController = new ListUserController(listUserUseCase);

export { listUserController };
