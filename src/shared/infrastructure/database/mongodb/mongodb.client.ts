import { MongoClient } from "mongodb";

export const createMongoClient = (uri: string) => new MongoClient(uri);
