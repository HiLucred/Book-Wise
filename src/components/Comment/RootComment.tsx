import { styled } from '../../../stitches.config'
import { ComponentProps, ReactNode } from 'react'

interface RootCommentProps extends ComponentProps<'div'> {
  children: ReactNode
  color: 'default' | 'compact'
}

export function RootComment({ children, color }: RootCommentProps) {
  return (
    <Container color={color === 'compact' ? 'compact' : 'default'}>
      {children}
    </Container>
  )
}

export const Container = styled('div', {
  maxWidth: 608,
  padding: '$6',
  marginBottom: '0.75rem',
  borderRadius: '$md',

  variants: {
    color: {
      default: {
        backgroundColor: '$gray700',
      },
      compact: {
        backgroundColor: '$gray600',
      },
    },
  },

  defaultVariants: {
    color: 'default',
  },
})
