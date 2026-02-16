import type { GetUserByIdQuery } from "../../../../application/queries/get-user-by-id/get-user-by-id.query";
import type { GetUserByIdParams } from "./get-user-by-id.http.schema";

export const mapGetUserByIdHttpToQuery = (
  params: GetUserByIdParams
): GetUserByIdQuery => {
  return {
    type: "users.getById",
    payload: {
      id: params.id,
    },
  };
};
