export const AccountsKeys = {
  all: ['accounts'] as const,
  list: () => [...AccountsKeys.all, 'list'] as const,
};
