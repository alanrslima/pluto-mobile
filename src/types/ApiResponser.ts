export type ApiResponser<T> = {
  data: T;
  status: number;
  message: string;
};
