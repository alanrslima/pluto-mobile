import {Category} from '../../../types/Category';

export type CategoriesListProps = {
  categories: Category[];
  onPressCategory: (category: Category) => void;
};
