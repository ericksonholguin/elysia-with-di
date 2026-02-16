import { MongoClient } from "mongodb";
import type { MongoDatasource } from "./mongodb.types";

export const createMongoDatasource = async (params: {
  uri: string;
  dbName: string;
}): Promise<MongoDatasource> => {
  const client = new MongoClient(params.uri);

  await client.connect();

  const db = client.db(params.dbName);

  return { client, db };
};
