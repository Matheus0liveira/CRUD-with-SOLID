import { DbUsersRepository } from '../../repositories/implementations/DbUsersRepository';
import CreateUserCase from '../CreateUser/CreateUserUseCase';
import DeleteUserCase from './DeleteUserCase';
import DeleteUserController from './DeleteUserController';

const dbUserRepository = new DbUsersRepository();

const deleteUserCase = new DeleteUserCase(dbUserRepository);

const deleteUserController = new DeleteUserController(deleteUserCase);

export { deleteUserController };