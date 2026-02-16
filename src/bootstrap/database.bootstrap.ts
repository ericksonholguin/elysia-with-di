import { env } from "../config/env";
import { createMongoDatasource } from "../shared/infrastructure/datasources/mongodb/mongodb.datasource";
import type { MongoDatasource } from "../shared/infrastructure/datasources/mongodb/mongodb.types";

export const bootstrapDatabase = async (): Promise<MongoDatasource> => {
  return await createMongoDatasource({
    uri: env.MONGODB_URI,
    dbName: env.MONGODB_DB_NAME,
  });
};
