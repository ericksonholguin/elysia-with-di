export type Command<TResponse = unknown> = {
  readonly type: string;
  readonly payload: unknown;
};

export type CommandHandler<TCommand extends Command, TResponse> = {
  execute(command: TCommand): Promise<TResponse>;
};
