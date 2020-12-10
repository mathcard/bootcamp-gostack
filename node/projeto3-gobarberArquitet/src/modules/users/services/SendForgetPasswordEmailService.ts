import { injectable, inject } from 'tsyringe';
//import User from '@modules/users/infra/typeorm/entities/User';
//import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  email: string;
}

@injectable()
class SendForgotPasswordEmailService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

  ) {}

  public async execute({ email: IRequest }: IRequest): Promise<void> {

  }
}

export default SendForgotPasswordEmailService;
