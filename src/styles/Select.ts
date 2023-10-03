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
    width: '15rem',
    borderRight: `2px solid ${theme.colors.inputBorder}`,
    borderLeft: `2px solid ${theme.colors.inputBorder}`,
  }),
  control: (styles) => ({
    ...styles,
    background: 'transparent',
    border: 'none',
    boxShadow: 'none',
    minHeight: '3.2rem',
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
    '@media (min-width: 640px) and (max-width: 1024px)': {
      padding: 0,
    },
  }),
  placeholder: (styles) => ({
    ...styles,
    fontSize: '1.6rem',
    '@media (min-width: 640px) and (max-width: 1024px)': {
      fontSize: '2rem',
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
    fontSize: '1.4rem',
  }),
};
