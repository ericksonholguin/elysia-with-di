import { injectable, inject } from "tsyringe";

import { UsersModel } from "./users.mongoose.schema";
import type { UsersRepository } from "../../../domain/repositories/users.repository";
import type { MongooseDatasource } from "../../../../../shared/infrastructure/datasources/mongodb/mongoose.datasource";
import { TOKENS } from "../../../../../shared/infrastructure/di/tokens";
import type { User } from "../../../domain/entities/user.entity";
import { Types } from "mongoose";

@injectable()
export class MongoUsersRepository implements UsersRepository {
  constructor(
    @inject(TOKENS.MongooseDatasource)
    private readonly mongoose: MongooseDatasource
  ) {}

  async create(input: { email: string; name: string }): Promise<User> {
    const created = await UsersModel.create({
      email: input.email,
      name: input.name,
    });

    return {
      id: created._id.toString(),
      email: created.email,
      name: created.name,
      createdAt: created.createdAt,
      updatedAt: created.updatedAt,
    };
  }

  async findById(id: string): Promise<User | null> {
    const objectId = new Types.ObjectId(id);

    const doc = await UsersModel.findById(objectId);

    if (!doc) return null;

    return {
      id: doc._id.toString(),
      email: doc.email,
      name: doc.name,
      createdAt: doc.createdAt,
      updatedAt: doc.updatedAt,
    };
  }

  async findByEmail(email: string): Promise<User | null> {
    const doc = await UsersModel.findOne({ email });

    if (!doc) return null;

    return {
      id: doc._id.toString(),
      email: doc.email,
      name: doc.name,
      createdAt: doc.createdAt,
      updatedAt: doc.updatedAt,
    };
  }
}
