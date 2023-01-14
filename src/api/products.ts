import {AxiosResponse} from 'axios';
import {dispatchRequest} from './dispatchRequest';

export interface IProducts {
  createdAt: string;
  product: string;
  points: number;
  image: string;
  is_redemption: boolean;
  id: string;
}

export const getProducts = (): Promise<
  AxiosResponse<IProducts[]> | undefined
> =>
  dispatchRequest({
    method: 'get',
    url: 'products',
  });
