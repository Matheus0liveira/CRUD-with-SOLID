import { IUser } from '../entities/IUser';

export interface IUserRepository {
  findByEmail(email: string): Promise<IUser>;
  save(user: IUser): Promise<void>;
  delete(id: string): Promise<void>;
  findAll(): Promise<IUser[]>;
  update(id: string, user: IUser): Promise<IUser>;
}