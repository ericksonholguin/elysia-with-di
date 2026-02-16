export const env = {
  NODE_ENV: process.env.NODE_ENV ?? "development",
  PORT: Number(process.env.PORT ?? 3000),
  MONGODB_URI:
    process.env.MONGODB_URI ??
    "mongodb+srv://erickson01d:x0xV5FcrfMjQpiXI@automarketdo.mynlaxf.mongodb.net/?appName=Automarketdo",
  MONGODB_DB_NAME: process.env.MONGODB_DB_NAME ?? "elysia_with_di",
};
