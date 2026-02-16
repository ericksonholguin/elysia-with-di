import type { MongoConnection } from "../database/mongodb/mongodb.connection";
import { container } from "./container";
import { TOKENS } from "./tokens";

export const registerSharedDependencies = (deps: {
  mongo: MongoConnection;
}) => {
  container.register(TOKENS.MongoConnection, { useValue: deps.mongo });
};
