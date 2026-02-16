export type CreateUserCommand = {
  type: "users.create";
  payload: {
    email: string;
    name: string;
  };
};
