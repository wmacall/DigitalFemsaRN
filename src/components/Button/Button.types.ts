import {TxKeyPath} from '../../i18n';

export interface IButtonProps {
  onPress?: () => void;
  text: TxKeyPath;
  variant?: 'full' | 'small';
}
