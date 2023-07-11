// import * as Dialog from '@radix-ui/react-dialog'
import { keyframes, styled } from '../../../stitches.config'

const triggerCardShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

// const overlayShow = keyframes({
//   '0%': { opacity: 0 },
//   '100%': { opacity: 0.4 },
// })

// const contentShow = keyframes({
//   '0%': { transform: 'translateX(500%)' },
//   '100%': { transform: 'translateX(0%)' },
// })

export const Container = styled('div', {
  width: '19.875rem',
  padding: '1.125rem 1.25rem',
  marginBottom: '0.75rem',
  display: 'flex',
  gap: '1.25rem',
  borderRadius: '$md',
  backgroundColor: '$gray700',
  border: '1px solid transparent',
  animation: `${triggerCardShow} 0.3s`,
  transition: '0.3s',
  position: 'relative',

  '&:hover': {
    border: '1px solid $gray600',
    cursor: 'pointer',
    transition: '0.3s',
  },

  variants: {
    alreadyRead: {
      true: {
        '&::after': {
          content: 'LIDO',
          position: 'absolute',
          backgroundColor: '$green300',
          top: 0,
          right: 0,
          color: '$green100',
          fontWeight: 'bold',
          fontSize: '$xs',
          padding: '$1 $3',
          borderRadius: '0px 4px 0px 4px',
        },
      },
    },

    size: {
      compact: {},
      expanded: {},
    },
  },
})

export const Info = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
})

export const Text = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  textAlign: 'start',
})
