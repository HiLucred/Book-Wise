import { styled } from '../../../../../stitches.config'
import * as Dialog from '@radix-ui/react-dialog'

export const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  top: 0,
  right: 0,
  zIndex: 99999999999,
  border: 'none',
  cursor: 'pointer',
  background: 'transparent',
  width: '50rem',
  height: '2rem',

  '&:hover': {
    opacity: 0.8,
  },
})
