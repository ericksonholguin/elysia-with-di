import { container } from "../../../../shared/infrastructure/di/container";
import { MongoUsersRepository } from "../database/mongodb/users.mongo.repository";
import { USERS_REPOSITORY } from "../../application/commands/create-user/create-user.handler";

export const registerUsersModule = () => {
  container.register(USERS_REPOSITORY, { useClass: MongoUsersRepository });
};
