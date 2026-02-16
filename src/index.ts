import "reflect-metadata";

import { Elysia } from "elysia";

import { bootstrapApp } from "./bootstrap/app.bootstrap";

const app = await bootstrapApp();

export default app;
