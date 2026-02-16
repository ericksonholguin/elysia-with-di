import { t } from "elysia";

export const getUserByIdParamsSchema = t.Object({
  id: t.String(),
});

export type GetUserByIdParams = typeof getUserByIdParamsSchema.static;
