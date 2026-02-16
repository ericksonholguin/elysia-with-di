import { injectable, inject } from "tsyringe";

import type { GetUserByIdQuery } from "./get-user-by-id.query";
import { USERS_REPOSITORY } from "../../commands/create-user/create-user.handler";
import type { UsersRepository } from "../../../domain/repositories/users.repository";

@injectable()
export class GetUserByIdHandler {
  constructor(
    @inject(USERS_REPOSITORY)
    private readonly usersRepository: UsersRepository
  ) {}

  async execute(query: GetUserByIdQuery) {
    const user = await this.usersRepository.findById(query.payload.id);

    if (!user) {
      throw new Error("USER_NOT_FOUND");
    }

    return user;
  }
}
