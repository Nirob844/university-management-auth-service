import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AUthController } from './auth.controller';
import { AuthValidation } from './auth.validation';

const router = express.Router();

router.post(
  '/login',
  validateRequest(AuthValidation.loginZodSchema),
  AUthController.loginUser
);

router.post(
  '/refresh-token',
  validateRequest(AuthValidation.refreshTokenZodSchema),
  AUthController.refreshToken
);
export const AuthRoutes = router;
