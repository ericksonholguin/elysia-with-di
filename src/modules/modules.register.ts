import { registerUsersModule } from "./users/infrastructure/di/users.register";

export const registerModules = () => {
  registerUsersModule();
};
