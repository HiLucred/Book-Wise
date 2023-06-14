import { Title } from '@/components/Typography'
import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, Trigger } from './styles'
import { LoginButton } from '@/pages/login/components/LoginButton'
import { ReactNode } from 'react'
import { X } from 'phosphor-react'

interface LoginDialogTriggerProps {
  content: ReactNode
}

export function LoginDialogTrigger({ content }: LoginDialogTriggerProps) {
  return (
    <Dialog.Root>
      <Trigger>{content}</Trigger>

      <Dialog.Portal>
        <Overlay />
        <Content>
          <CloseButton>
            <X size={18} color='#8D95AF' weight='bold' />
          </CloseButton>
          
          <Title>Faça login para deixar sua avaliação</Title>

          <LoginButton type='google' callbackUrl='/explorar' />
          <LoginButton type='github' callbackUrl='/explorar' />
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
