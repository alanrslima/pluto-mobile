export const CategoriesKeys = {
  all: ['categories'] as const,
  list: () => [...CategoriesKeys.all, 'list'] as const,
};
