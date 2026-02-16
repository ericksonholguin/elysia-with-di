import type { MongoDatasource } from "../datasources/mongodb/mongodb.types";
import { container } from "./container";
import { TOKENS } from "./tokens";
import type { MongooseDatasource } from "../datasources/mongodb/mongoose.datasource";

export const registerSharedDependencies = (deps: {
  mongo: MongoDatasource;
  mongoose: MongooseDatasource;
}) => {
  container.register(TOKENS.MongoDatasource, { useValue: deps.mongo });
  container.register(TOKENS.MongooseDatasource, { useValue: deps.mongoose });
};
