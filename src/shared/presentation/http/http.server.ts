import { Elysia } from "elysia";
import { usersHttpRoutes } from "../../../modules/users/presentation/http/users.http.routes";

export const createHttpServer = () => {
  const app = new Elysia();

  app.get("/health", () => ({ ok: true }));

  app.use(usersHttpRoutes);

  return app;
};
