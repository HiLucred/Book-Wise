import { ReactNode } from 'react'
import * as DialogRX from '@radix-ui/react-dialog'
import { Overlay, Root, Trigger } from './styles'

interface DialogProps {
  trigger: ReactNode
  children: ReactNode
}
export function Dialog({ trigger, children }: DialogProps) {
  return (
    <Root>
      <Trigger>{trigger}</Trigger>

      <DialogRX.Portal>
        <Overlay />
        <DialogRX.Content>{children}</DialogRX.Content>
      </DialogRX.Portal>
    </Root>
  )
}
