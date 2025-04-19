import { UserInfoItf } from "@superfit/types/user";
import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const Jwt = createParamDecorator((_, context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest();
  const tokenPayload = {} as UserInfoItf;
  if (request.user) {
    tokenPayload.id = request.user.id;
    tokenPayload.login_type = request.user.login_type;
    tokenPayload.user_id = request.user.user_id;
    tokenPayload.user_hp = request.user.user_hp;
    tokenPayload.user_name = request.user.user_name;
    tokenPayload.user_nickname = request.user.user_nickname;
    tokenPayload.user_email = request.user.user_email;
    tokenPayload.user_gender = request.user.user_gender;
    tokenPayload.user_birthday = request.user.user_birthday;
    console.log(tokenPayload);
    return tokenPayload;
  }
  console.log();
  return null;
});
