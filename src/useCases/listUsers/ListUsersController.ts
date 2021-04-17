import { Request, Response } from 'express';
import ListUserUseCase from './listUsersUseCase';

export default class ListUserController {

  constructor(
    private listUserUseCase: ListUserUseCase,
  ){};

  
  async handle(request: Request, response: Response): Promise<Response>{

    try{
      const users = await this.listUserUseCase.execute();

      return response.status(201).json(users);

    }catch(err){
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
        
      });
    }
  };
}