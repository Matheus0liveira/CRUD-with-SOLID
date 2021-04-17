import { IUser } from '../../entities/IUser';
import { IUserRepository } from '../../repositories/IUsersRepository';

export default class UpdateUserUseCase {

  constructor(
    private usersRepository: IUserRepository,
  ){};

  async execute(id: string, data: IUser): Promise<IUser>{
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

    if(!userAlreadyExists){
      throw new Error('User not exists.');
    }

    const updateData = {
      name: data.name || userAlreadyExists.name,
      email: data.email || userAlreadyExists.email,
      password: data.password || userAlreadyExists.password,
    } as IUser;

    const updateUser = await this.usersRepository.update(id, updateData);


    return updateUser;
  }
}