import { createMongoClient } from "../shared/infrastructure/database/mongodb/mongodb.client";
import type { MongoConnection } from "../shared/infrastructure/database/mongodb/mongodb.connection";
import { env } from "../config/env";

export const bootstrapDatabase = async (): Promise<MongoConnection> => {
  const client = createMongoClient(env.MONGODB_URI);

  await client.connect();

  const db = client.db(env.MONGODB_DB_NAME);

  return { client, db };
};
