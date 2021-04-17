import { IUser } from '../../entities/IUser';
import User from '../../entities/User';
import { IUserRepository } from '../IUsersRepository';

export class DbUsersRepository implements IUserRepository {


  async findByEmail(email: string): Promise<IUser>{
    const user = await User.findOne({email});

    return user;
  };

  async save(user: IUser): Promise<void>{
    await User.create(user);

  };

  async delete(id: string): Promise<void>{

    console.log({id})
    await User.findByIdAndRemove(id);
  };

  async findAll(): Promise<IUser[]>{


    const users = await User.find();

    console.log(users);


    return users
  }
};