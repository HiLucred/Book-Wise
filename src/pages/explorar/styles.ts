import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  width: '100%',
  height: '100%',
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '0.75rem',
  marginBottom: '2.5rem',
})

export const SearchBar = styled('form', {
  width: '27rem',
  padding: '1rem',
  border: '1px solid $gray500',
  borderRadius: '$sm',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  input: {
    width: '100%',
    height: '100%',
    background: 'transparent',
    outline: 'none',
    border: 'none',
    color: '$gray100',
  },

  button: {
    background: 'transparent',
    opacity: 0,
  },

  svg: {
    color: '$gray500',
  },
})
