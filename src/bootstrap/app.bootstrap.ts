import { bootstrapDatabase } from "./database.bootstrap";
import { bootstrapDI } from "./di.bootstrap";
import { createHttpServer } from "../shared/presentation/http/http.server";
import { bootstrapHttp } from "./http.bootstrap";

export const bootstrapApp = async () => {
  console.log("Bootstrapping app...");
  const mongo = await bootstrapDatabase();

  await bootstrapDI({ mongo });

  const app = createHttpServer();

  await bootstrapHttp(app);
};
