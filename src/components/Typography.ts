import { styled } from '../../stitches.config'
import Link from 'next/link'

export const Title = styled('h2', {
  variants: {
    size: {
      big: {
        fontSize: '$2xl',
      },

      medium: {
        fontSize: '$md',
      },

      small: {
        fontSize: '$sm',
      },
    },

    weight: {
      bold: {
        fontWeight: '$bold',
      },

      regular: {
        fontWeight: '$regular',
      },
    },

    color: {
      gray100: {
        color: '$gray100',
      },
      gray200: {
        color: '$gray200',
      },
      gray300: {
        color: '$gray300',
      },
      gray400: {
        color: '$gray400',
      },
      purple100: {
        color: '$purple100',
      },
    },
  },

  defaultVariants: {
    color: 'gray100',
    weight: 'regular',
    size: 'medium',
  },
})

export const Paragraph = styled('p', {
  fontSize: '$sm',
  fontWeight: '$regular',

  variants: {
    color: {
      gray300: {
        color: '$gray300',
      },
    },
  },

  defaultVariants: {
    color: 'gray300',
  },
})

export const SpanLink = styled(Link, {
  fontSize: '0.875rem',
  color: '$purple100',
  fontWeight: '700',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  textDecoration: 'none',

  '&:hover': {
    opacity: 0.8,
  },
})

export const ErrorMessage = styled('span', {
  color: '#cd4244',
  fontSize: '0.875rem',
})
