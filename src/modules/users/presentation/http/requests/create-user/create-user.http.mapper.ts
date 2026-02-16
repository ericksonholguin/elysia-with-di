import type { CreateUserCommand } from "../../../../application/commands/create-user/create-user.command";
import type { CreateUserBody } from "./create-user.http.schema";

export const mapCreateUserHttpToCommand = (
  body: CreateUserBody
): CreateUserCommand => {
  return {
    type: "users.create",
    payload: { email: body.email, name: body.name },
  };
};
