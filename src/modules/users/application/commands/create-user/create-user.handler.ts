import { injectable, inject } from "tsyringe";

import type { CreateUserCommand } from "./create-user.command";
import type { UsersRepository } from "../../../domain/repositories/users.repository";

export const USERS_REPOSITORY = Symbol.for("UsersRepository");

@injectable()
export class CreateUserHandler {
  constructor(
    @inject(USERS_REPOSITORY)
    private readonly usersRepository: UsersRepository
  ) {}

  async execute(command: CreateUserCommand) {
    const { email, name } = command.payload;

    const existing = await this.usersRepository.findByEmail(email);

    if (existing) {
      throw new Error("USER_EMAIL_ALREADY_EXISTS");
    }

    // return await this.usersRepository.create({ email, name });
    return {
      id: "019c6653-f384-70e9-99d7-16285f154aee",
      email,
      name,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }
}
