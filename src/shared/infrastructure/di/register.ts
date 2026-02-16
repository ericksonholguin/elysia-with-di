import type { MongoDatasource } from "../datasources/mongodb/mongodb.types";
import { container } from "./container";
import { TOKENS } from "./tokens";

export const registerSharedDependencies = (deps: {
  mongo: MongoDatasource;
}) => {
  container.register(TOKENS.MongoDatasource, { useValue: deps.mongo });
};
