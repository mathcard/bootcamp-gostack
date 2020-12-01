import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '@config/auth';
import AppError from '@shared/errors/AppError';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  // Validação do Token JWT
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT token is missing', 401);
  }

  // Bearer kdslafjksljdsfsfasf
  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);
    console.log(decoded);

    const { sub } = decoded as TokenPayload;

    request.user = {
      id: sub,
    };

    return next();
  } catch (err) {
    throw new AppError('Invalid JWT Token', 401);
  }
}
