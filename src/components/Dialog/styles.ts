import * as Dialog from '@radix-ui/react-dialog'
import { keyframes, styled } from '../../../stitches.config'

export const Root = styled(Dialog.Root, {
  border: 'none',
  background: 'transparent',
})

export const Trigger = styled(Dialog.Trigger, {
  backgroundColor: 'transparent',
  border: 'none',

  '&:hover': {
    opacity: 0.8,
  },
})

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 0.4 },
})

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  inset: 0,
  backgroundColor: '$black',
  opacity: 0.34,
  animation: `${overlayShow} 0.3s `,
})
