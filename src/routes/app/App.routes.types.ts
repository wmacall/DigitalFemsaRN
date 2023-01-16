import {IProducts} from '../../api';

export enum EAppRoutes {
  HOME_SCREEN = 'HOME_SCREEN',
  PRODUCT_DETAIL_SCREEN = 'PRODUCT_DETAIL_SCREEN',
}

export type TAppStackRouter = {
  [EAppRoutes.HOME_SCREEN]: undefined;
  [EAppRoutes.PRODUCT_DETAIL_SCREEN]: {product: IProducts};
};
