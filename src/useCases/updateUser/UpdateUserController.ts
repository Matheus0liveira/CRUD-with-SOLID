import { Request, Response } from 'express';
import { IUser } from '../../entities/IUser';
import UpdateUserUseCase from './UpdateUserUseCase';

export default class UpdateUserController {

  constructor(
    private updateUserUseCase: UpdateUserUseCase,
  ){};

  async handle(request: Request, response: Response): Promise<Response> {

    const { name, email, password } = request.body;
    const { id } = request.params;


    const data = {name, email, password} as IUser;

    try{
      const user = await this.updateUserUseCase.execute(id, data)

      return response.status(201).json(user);

    }catch(err){
      return response.status(400).json({
      message: err.message || 'Unexpected error.'
    });
    }
  };

}