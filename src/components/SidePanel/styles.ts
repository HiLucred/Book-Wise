import * as Dialog from '@radix-ui/react-dialog'
import { keyframes, styled } from '../../../stitches.config'

const contentShow = keyframes({
  '0%': { transform: 'translateX(500%)' },
  '100%': { transform: 'translateX(0%)' },
})

export const Container = styled('div', {
  width: '41.25rem',
  height: '100vh',
  paddingInline: '3rem',
  paddingTop: '4rem',
  animation: `${contentShow} 0.3s`,
  overflow: 'auto',
  position: 'fixed',
  top: 0,
  right: 0,
  backgroundColor: '$gray800',
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  top: '1rem',
  right: '2rem',
  zIndex: 99999999999,
  border: 'none',
  cursor: 'pointer',
  background: 'transparent',
  width: 32,
  height: 32,

  '&:hover': {
    opacity: 0.8,
  },
})
