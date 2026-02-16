import { container } from "./container";
import { TOKENS } from "./tokens";
import type { MongoDatasource } from "../datasources/mongodb/mongodb.types";

export const registerSharedDependencies = (deps: {
  mongo: MongoDatasource;
}) => {
  container.register(TOKENS.MongoDatasource, { useValue: deps.mongo });
};
