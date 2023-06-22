import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { User } from '../user/user.model';
import { ILoginUser } from './auth.interface';

const loginUser = async (payload: ILoginUser) => {
  const { id, password } = payload;

  const isUserExist = await User.isUserExist(id);

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }

  if (
    isUserExist.password &&
    !(await User.isPasswordMatched(password, isUserExist.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
  }

  //create access token & refresh token

  // const { id: userId, role, needsPasswordChange } = isUserExist;
  // const accessToken = jwtHelpers.createToken(
  //   { userId, role },
  //   config.jwt.secret as Secret,
  //   config.jwt.expires_in as string
  // );

  // const refreshToken = jwtHelpers.createToken(
  //   { userId, role },
  //   config.jwt.refresh_secret as Secret,
  //   config.jwt.refresh_expires_in as string
  // );

  return {
    isUserExist,
  };
};

export const AuthService = {
  loginUser,
};
