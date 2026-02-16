import type { MongoDatasource } from "../shared/infrastructure/datasources/mongodb/mongodb.types";
import { registerSharedDependencies } from "../shared/infrastructure/di/register";
import { registerModules } from "../modules/modules.register";

export const bootstrapDI = async (deps: { mongo: MongoDatasource }) => {
  registerSharedDependencies(deps);
  registerModules();
};
