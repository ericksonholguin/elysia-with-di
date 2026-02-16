import type { Db, MongoClient } from "mongodb";

export type MongoDatasource = {
  client: MongoClient;
  db: Db;
};
