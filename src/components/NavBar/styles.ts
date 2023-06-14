import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  width: '14.5rem',
  height: '95vh',
  margin: '1.25rem',
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '$md',
  backgroundColor: '$gray700',
})

export const Menu = styled('nav', {
  marginTop: '2.5rem',
})

export const List = styled('ul', {
  paddingLeft: '1.25rem',
  marginTop: '4rem',
  display: 'flex',
  flexDirection: 'column',
  listStyleType: 'none',
  color: '$gray400',

  img: {
    marginBottom: '4rem',
  },
})

export const Item = styled('li', {
  marginBottom: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  transition: 'all 3s',

  a: {
    color: '$gray400',
    textDecoration: 'none',
    transition: 'all 0.3s',

    '&:hover': {
      opacity: 0.8,
    },
  },

  variants: {
    isActive: {
      true: {
        a: {
          fontWeight: '$bold',
          color: '$gray100',
          position: 'relative',

          '&:after': {
            content: '',
            width: '0.25rem',
            height: '1.5rem',
            background: '$gradientVertical',
            borderRadius: '$full',
            position: 'absolute',
            left: '-3rem',
            top: 0,
          },
        },
      },

      false: {
        a: {
          fontWeight: '$medium',
          color: '$gray400',
        },
      },
    },
  },

  defaultVariants: {
    isActive: false,
  },
})

export const UserBox = styled('div', {
  marginBottom: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.75rem',

  img: {
    borderRadius: '$full',
  },
})

export const UserButton = styled('button', {
  paddingTop: '0.2rem',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: 'transparent',
})
