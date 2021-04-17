import { IUserRepository } from '../../repositories/IUsersRepository';
import { IDeleteUserRequestDTO } from './DeleteUserDTO';

export default class DeleteUserCase {

  constructor(
      private usersRepository: IUserRepository,
  ){}


  async execute({ id }: IDeleteUserRequestDTO): Promise<void> {
    
    await this.usersRepository.delete(id);

  }
}