import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {EAppRoutes, TAppStackRouter} from '../../routes';

export type THomeScreenProps = NativeStackScreenProps<
  TAppStackRouter,
  EAppRoutes.HOME_SCREEN
>;
