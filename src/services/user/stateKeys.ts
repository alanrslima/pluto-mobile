export const UserKeys = {
  all: ['user'] as const,
  list: () => [...UserKeys.all, 'list'] as const,
};
