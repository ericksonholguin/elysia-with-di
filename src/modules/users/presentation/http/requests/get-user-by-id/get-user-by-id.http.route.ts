import { Elysia } from "elysia";
import { container } from "../../../../../../shared/infrastructure/di/container";

import { GetUserByIdHandler } from "../../../../application/queries/get-user-by-id/get-user-by-id.handler";

import { getUserByIdParamsSchema } from "./get-user-by-id.http.schema";
import { mapGetUserByIdHttpToQuery } from "./get-user-by-id.http.mapper";

export const getUserByIdHttpRoute = new Elysia().get(
  "/:id",
  async ({ params }) => {
    const handler = container.resolve(GetUserByIdHandler);

    return await handler.execute(mapGetUserByIdHttpToQuery(params));
  },
  { params: getUserByIdParamsSchema }
);
