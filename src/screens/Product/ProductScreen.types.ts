import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {EAppRoutes, TAppStackRouter} from '../../routes';

export type TProductScreenProps = NativeStackScreenProps<
  TAppStackRouter,
  EAppRoutes.PRODUCT_DETAIL_SCREEN
>;
