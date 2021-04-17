import { IUser } from '../../entities/IUser';
import { IUserRepository } from '../../repositories/IUsersRepository';

export default class ListUserUseCase {

  constructor(
    private userRepository: IUserRepository,
  ){};

  async execute(): Promise<IUser[]>{

    const users = await this.userRepository.findAll()

    return users

  }
}