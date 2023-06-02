import {useFetch, UseFetchHooks} from '../../hooks/useFetch';
import {ApiResponser} from '../../types/ApiResponser';
import {Category} from '../../types/Category';
import {DataProps} from '../../types/Data';
import {CategoriesKeys as Keys} from './stateKeys';

const processor = (data: ApiResponser<DataProps<Category[]>>): Category[] => {
  return data.data.rows;
};

export const useGetCategories = (props?: UseFetchHooks) => {
  const {context, params, config} = props || {};
  return useFetch<Category[]>({
    key: Keys.list(),
    url: '/v1/categories',
    params,
    context,
    config,
    processor,
  });
};
