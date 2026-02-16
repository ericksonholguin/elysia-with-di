import { t } from "elysia";

export const createUserBodySchema = t.Object({
  email: t.String({ format: "email" }),
  name: t.String({ minLength: 2 }),
});

export type CreateUserBody = typeof createUserBodySchema.static;
