import { injectable, inject } from "tsyringe";
import { ObjectId } from "mongodb";
import type { UsersRepository } from "../../../domain/repositories/users.repository";
import type { MongoDatasource } from "../../../../../shared/infrastructure/datasources/mongodb/mongodb.types";
import { TOKENS } from "../../../../../shared/infrastructure/di/tokens";
import { User } from "../../../domain/entities/user.entity";

@injectable()
export class MongoUsersRepository implements UsersRepository {
  constructor(
    @inject(TOKENS.MongoDatasource)
    private readonly mongo: MongoDatasource
  ) {}

  private collection() {
    return this.mongo.db.collection("users");
  }

  async create(input: { email: string; name: string }): Promise<User> {
    const now = new Date();

    const doc = {
      email: input.email,
      name: input.name,
      createdAt: now,
      updatedAt: now,
    };

    const result = await this.collection().insertOne(doc);

    return {
      id: result.insertedId.toString(),
      ...doc,
    };
  }

  async findById(id: string): Promise<User | null> {
    if (!ObjectId.isValid(id)) return null;

    const doc = await this.collection().findOne({ _id: new ObjectId(id) });

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
    const doc = await this.collection().findOne({ email });

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
