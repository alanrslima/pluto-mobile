import {Category} from '../../../types/Category';
import {ModalHandle} from '../../templates/Modal/types';

export type ModalCategoriesProps = {
  onSelect: (category: Category) => void;
};

export type ModalCategoriesHandle = ModalHandle;
