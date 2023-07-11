import { styled } from '../../../../../stitches.config'

export const Container = styled('div', {
  marginBottom: '3rem',
  display: 'flex',
  gap: '$2',
  flexWrap: 'wrap',
  alignItems: 'center',
  background: 'transparent',
  border: 'none',
})

export const Categorie = styled('button', {
  listStyleType: 'none',
  borderRadius: '$full',
  padding: '$2 $3',
  transition: 'all 0.3s',

  '&:hover': {
    color: '$white',
    backgroundColor: '$purple200',
    cursor: 'pointer',
  },

  variants: {
    active: {
      true: {
        color: '$white',
        backgroundColor: '$purple200',
        border: '1px solid transparent',
      },

      false: {
        color: '$purple100',
        backgroundColor: 'transparent',
        border: '1px solid $purple100',
      },
    },
  },

  defaultVariants: {
    active: false,
  },
})
