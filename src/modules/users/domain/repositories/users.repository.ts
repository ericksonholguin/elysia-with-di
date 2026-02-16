import type { User } from "../entities/user.entity";

export interface UsersRepository {
  create(input: { email: string; name: string }): Promise<User>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
}
