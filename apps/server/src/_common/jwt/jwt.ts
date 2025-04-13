import { UserInfoItf } from "@superfit/types/user";
import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const Jwt = createParamDecorator((_, context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest();
  const tokenPayload = {} as UserInfoItf;
  if (request.user) {
    tokenPayload.id = request.id;
    tokenPayload.login_type = request.login_type;
    tokenPayload.user_id = request.user_id;
    tokenPayload.user_hp = request.user_hp;
    tokenPayload.user_name = request.user_name;
    tokenPayload.user_nickname = request.user_nickname;
    tokenPayload.user_email = request.user_email;
    tokenPayload.user_gender = request.user_gender;
    tokenPayload.user_birthday = request.user_birthday;
    return tokenPayload;
  }
  return null;
});
