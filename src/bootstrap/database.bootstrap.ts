import { env } from "../config/env";
import { createMongoDatasource } from "../shared/infrastructure/datasources/mongodb/mongodb.datasource";
import type { MongoDatasource } from "../shared/infrastructure/datasources/mongodb/mongodb.types";
import {
  createMongooseDatasource,
  MongooseDatasource,
} from "../shared/infrastructure/datasources/mongodb/mongoose.datasource";

export const bootstrapMongoDatabase = async (): Promise<MongoDatasource> => {
  return await createMongoDatasource({
    uri: env.MONGODB_URI,
    dbName: env.MONGODB_DB_NAME,
  });
};

export const bootstrapMongooseDatabase =
  async (): Promise<MongooseDatasource> => {
    return await createMongooseDatasource({
      uri: env.MONGODB_URI,
    });
  };
