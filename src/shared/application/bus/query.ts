export type Query<TResponse = unknown> = {
  readonly type: string;
  readonly payload: unknown;
};

export type QueryHandler<TQuery extends Query, TResponse> = {
  execute(query: TQuery): Promise<TResponse>;
};
