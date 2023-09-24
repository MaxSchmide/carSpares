import { theme } from '@/styles';

export const getColorByProps = (props: any) => {
  switch (props.variant) {
    case 'primary':
      return theme.colors.secondary;
    case 'secondary':
      return theme.colors.secondary;
    default:
      return '#ffffff';
  }
};
