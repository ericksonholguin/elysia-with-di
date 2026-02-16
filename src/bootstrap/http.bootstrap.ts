import type { Elysia } from "elysia";
import { env } from "../config/env";

export const bootstrapHttp = async (app: Elysia) => {
  console.log(`🚀 HTTP server running on http://localhost:${env.PORT}`);
};
