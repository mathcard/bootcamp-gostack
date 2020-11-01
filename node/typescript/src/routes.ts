import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  //return response.json({message: 'Hello World'})
  const user = createUser({ 
    name: 'Matheus', 
    email: 'mathcardoso.94@gmail.com', 
    password: 'admin123',
    techs: ['NodeJS', 'ReactJS', 'ReactNative', {title: 'JavaScript', experience: 100}],
    experiences: {title: 'JavaScript', experience: 100},
  });
}