import { DbUsersRepository } from '../../repositories/implementations/DbUsersRepository';
import UpdateUserController from './UpdateUserController';
import UpdateUserUseCase from './UpdateUserUseCase';

const dbUserRepository = new DbUsersRepository();

const updateUserUseCase = new UpdateUserUseCase(dbUserRepository);

const updateUserController = new UpdateUserController(updateUserUseCase);


export { updateUserController };

