import {IProducts} from '../../api';

export interface IProductProps extends IProducts {
  onPress: () => void;
}
