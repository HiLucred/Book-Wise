import * as Dialog from '@radix-ui/react-dialog'
import { keyframes, styled } from '../../../../../stitches.config'
import { Title } from '@/components/Typography'

export const Container = styled('div', {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
  },
})

export const RateLink = styled(Title, {
  fontWeight: 'bold',
  cursor: 'pointer',

  variants: {
    visibility: {
      enabled: {
        visibility: 'enabled',
      },
      disabled: {
        visibility: 'hidden',
      },
    },
  },
})

export const DialogContent = styled(Dialog.Content, {
  width: '32.25rem',
  height: '21rem',
  borderRadius: '$md',
  position: 'fixed',
  top: '30%',
  left: '30%',
  backgroundColor: '$gray700',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  h2: {
    marginBottom: '2.5rem',
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

export const CloseButton = styled(Dialog.Close, {
  background: 'none',
  border: 'none',
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  cursor: 'pointer',

  '&:hover': {
    opacity: 0.8,
    cursor: 'pointer',
    backgroundColor: 'red',
  },
})
