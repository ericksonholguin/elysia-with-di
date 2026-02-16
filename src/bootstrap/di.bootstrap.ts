import type { MongoConnection } from "../shared/infrastructure/database/mongodb/mongodb.connection";
import { registerSharedDependencies } from "../shared/infrastructure/di/register";

export const bootstrapDI = async (deps: { mongo: MongoConnection }) => {
  registerSharedDependencies(deps);
};
