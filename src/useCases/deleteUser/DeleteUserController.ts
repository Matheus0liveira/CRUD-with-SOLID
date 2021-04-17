import { Request, Response } from 'express';
import DeleteUserCase from './DeleteUserCase';

export default class DeleteUserController {
  
  constructor(
    private deleteUserCase: DeleteUserCase,
  ){};

  async handle(request: Request, response: Response): Promise<Response> {

    const { id } = request.params;

    try {
      await this.deleteUserCase.execute({ id });

      return response.sendStatus(201).send();

    } catch (err) {
       return response.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }

  };
}