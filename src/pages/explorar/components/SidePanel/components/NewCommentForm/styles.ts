import { keyframes, styled } from '../../../../../../../stitches.config'

const openNewCommentForm = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

export const Container = styled('form', {
  width: '100%',
  backgroundColor: '$gray700',
  borderRadius: '$md',
  padding: '1.5rem',
  marginBottom: '0.75rem',
  animation: `${openNewCommentForm} 0.2s`,

  variants: {
    enabled: {
      open: { opacity: 1, visibility: 'visible', display: 'block' },
      close: { opacity: 0, visibility: 'hidden', display: 'none' },
    },
  },

  defaultVariants: {
    enabled: 'close',
  },
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '1.5rem',

  img: {
    borderRadius: '$full',
  },
})

export const TextArea = styled('textarea', {
  width: '100%',
  height: '10.25rem',
  border: '1px solid $gray500',
  backgroundColor: '$gray800',
  borderRadius: '$sm',
  marginBottom: '0.75rem',
  color: '$white',
  padding: '1rem',
  outline: 'none',
})

export const ActionButtons = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '0.5rem',
})

export const Button = styled('button', {
  backgroundColor: '$gray600',
  border: 'none',
  borderRadius: '$sm',
  padding: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',

  '&:hover': {
    opacity: 0.8,
  },
})
