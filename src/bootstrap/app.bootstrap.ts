import {
  bootstrapMongoDatabase,
  bootstrapMongooseDatabase,
} from "./database.bootstrap";
import { bootstrapDI } from "./di.bootstrap";
import { createHttpServer } from "../shared/presentation/http/http.server";
import { bootstrapHttp } from "./http.bootstrap";

export const bootstrapApp = async () => {
  const mongo = await bootstrapMongoDatabase();
  const mongoose = await bootstrapMongooseDatabase();

  await bootstrapDI({ mongo, mongoose });

  const app = createHttpServer();

  await bootstrapHttp(app);

  return app;
};
