import { Elysia } from "elysia";
import { container } from "../../../../../../shared/infrastructure/di/container";

import { CreateUserHandler } from "../../../../application/commands/create-user/create-user.handler";

import { createUserBodySchema } from "./create-user.http.schema";
import { mapCreateUserHttpToCommand } from "./create-user.http.mapper";

export const createUserHttpRoute = new Elysia().post(
  "/",
  async ({ body }) => {
    const handler = container.resolve(CreateUserHandler);

    return await handler.execute(mapCreateUserHttpToCommand(body));
  },
  { body: createUserBodySchema }
);
