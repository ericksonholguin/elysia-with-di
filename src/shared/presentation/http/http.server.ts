import Elysia from "elysia";

export const createHttpServer = () => {
  const app = new Elysia();

  console.info("HTTP server created");

  app.get("/health", () => ({ ok: true }));

  return app;
};
