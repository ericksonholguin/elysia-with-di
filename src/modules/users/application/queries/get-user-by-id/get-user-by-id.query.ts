export type GetUserByIdQuery = {
  type: "users.getById";
  payload: {
    id: string;
  };
};
