import { Elysia } from "elysia";
import { container } from "../../../../shared/infrastructure/di/container";

import { CreateUserHandler } from "../../application/commands/create-user/create-user.handler";
import { GetUserByIdHandler } from "../../application/queries/get-user-by-id/get-user-by-id.handler";
import { createUserBodySchema } from "./users.http.schemas";

export const usersHttpRoutes = new Elysia({ prefix: "/users" })
  .post(
    "/",
    async ({ body }) => {
      const handler = container.resolve(CreateUserHandler);

      const response = await handler.execute({
        type: "users.create",
        payload: body,
      });

      return {
        message: "User created successfully",
        data: response,
        error: null,
        timestamp: new Date().toISOString(),
      };
    },
    {
      body: createUserBodySchema,
    }
  )
  .get("/:id", async ({ params }) => {
    const handler = container.resolve(GetUserByIdHandler);

    const response = await handler.execute({
      type: "users.getById",
      payload: { id: params.id },
    });

    return {
      message: "User fetched successfully",
      data: response,
      error: null,
      timestamp: new Date().toISOString(),
    };
  });
