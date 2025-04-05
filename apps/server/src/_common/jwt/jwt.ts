import { UserInfoItf } from '@superfit/types/user';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Jwt = createParamDecorator((_, context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest();
  const tokenPayload = {} as UserInfoItf;
  if (request.user) {
    tokenPayload.id = request.user.id;
    tokenPayload.user_email = request.user.user_email;
    tokenPayload.user_name = request.user.user_name;
    tokenPayload.login_type = request.user.login_type;
    tokenPayload.center_id = request.user.center_id;
    return tokenPayload;
  }
  return null;
});
