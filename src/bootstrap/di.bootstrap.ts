import type { MongoDatasource } from "../shared/infrastructure/datasources/mongodb/mongodb.types";
import { registerSharedDependencies } from "../shared/infrastructure/di/register";
import { registerModules } from "../modules/modules.register";
import type { MongooseDatasource } from "../shared/infrastructure/datasources/mongodb/mongoose.datasource";

export const bootstrapDI = async (deps: {
  mongo: MongoDatasource;
  mongoose: MongooseDatasource;
}) => {
  registerSharedDependencies(deps);
  registerModules();
};
