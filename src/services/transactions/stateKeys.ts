export const TransactionsKeys = {
  all: ['transactions'] as const,
  list: () => [...TransactionsKeys.all, 'list'] as const,
};
