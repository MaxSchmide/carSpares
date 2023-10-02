import { GroupBase, StylesConfig } from 'react-select';
import { theme } from './Theme';

export const headerSelect: StylesConfig<
  { value: string; label: string },
  false,
  GroupBase<{ value: string; label: string }>
> = {
  container: (styles) => ({
    ...styles,
    position: 'absolute',
    top: '50%',
    right: '52px',
    transform: 'translateY(-50%)',
    width: '150px',
    borderRight: `2px solid ${theme.colors.inputBorder}`,
    borderLeft: `2px solid ${theme.colors.inputBorder}`,
  }),
  control: (styles) => ({
    ...styles,
    background: 'transparent',
    border: 'none',
    boxShadow: 'none',
  }),
  singleValue: (styles) => ({
    ...styles,
    color: 'white',
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: 'white',
    ':hover': {
      color: theme.colors.secondary,
    },
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    backgroundColor: isSelected
      ? theme.colors.secondary
      : isFocused
      ? theme.colors.secondaryShade + '3f'
      : 'transparent',
    color: isSelected ? 'white' : theme.colors.primary,
  }),
};
