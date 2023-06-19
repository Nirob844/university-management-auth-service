import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UsersController } from './user.controller';
import { UserValidation } from './user.validation';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(UserValidation.createUserZodSchema),
  UsersController.createStudent
);
router.post(
  '/create-faculty',
  // validateRequest(UserValidation.createUserZodSchema),
  UsersController.createFaculty
);

export const UserRoutes = router;
