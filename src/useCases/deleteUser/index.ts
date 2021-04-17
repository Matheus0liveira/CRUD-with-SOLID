import { DbUsersRepository } from '../../repositories/implementations/DbUsersRepository';
import CreateUserCase from '../CreateUser/CreateUserUseCase';
import DeleteUserCase from './DeleteUserCase';

const dbUserRepository = new DbUsersRepository();

const deleteUserCase = new DeleteUserCase(dbUserRepository);