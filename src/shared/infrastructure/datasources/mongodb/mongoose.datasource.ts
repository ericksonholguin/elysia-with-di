import mongoose from "mongoose";

export type MongooseDatasource = {
  connection: typeof mongoose;
};

export const createMongooseDatasource = async (params: { uri: string }) => {
  await mongoose.connect(params.uri);

  return { connection: mongoose } satisfies MongooseDatasource;
};
