type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  $variant?: ButtonVariant;
}
