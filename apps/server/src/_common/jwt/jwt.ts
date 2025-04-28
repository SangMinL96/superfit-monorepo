import { UserInfoItf } from "@superfit/types/user";
import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { setPayload } from "./utils";

export const Jwt = createParamDecorator((_, context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest();
  if (request.user) {
    return setPayload(request.user) as UserInfoItf;
  }
  return null;
});
