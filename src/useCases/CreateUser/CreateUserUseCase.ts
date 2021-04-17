import User from '../../entities/User';
import { IMailProvider } from '../../providers/IMailProvider';
import { IUserRepository } from '../../repositories/IUsersRepository';
import { ICreateUserRequestDTO } from './CreateUserDTO';

export default class CreateUserCase {
  constructor(
    private usersRepository: IUserRepository,
    private mailProvider: IMailProvider,
  ){};

  async execute(data: ICreateUserRequestDTO){
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

    if(userAlreadyExists){
      throw new Error('User already exists.');
    }


    const user = new User(data);

    await this.usersRepository.save(user);

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: 'Equipe App',
        email: 'equipe@mail.com',
      },
      subject: 'Seja bem vindo',
      body: '<p> Seja bem-vindo ao nosso APP.</p>'
    })
  };


};