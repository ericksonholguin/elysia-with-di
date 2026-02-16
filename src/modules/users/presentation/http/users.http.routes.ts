import { Elysia } from "elysia";

import { createUserHttpRoute } from "./requests/create-user/create-user.http.route";
import { getUserByIdHttpRoute } from "./requests/get-user-by-id/get-user-by-id.http.route";

export const usersHttpRoutes = new Elysia({ prefix: "/users" })
  .use(createUserHttpRoute)
  .use(getUserByIdHttpRoute);
