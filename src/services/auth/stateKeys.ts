export const AuthKeys = {
  all: ['auth'] as const,
  list: () => [...AuthKeys.all, 'list'] as const,
};
