import { Dialog } from '@/components/Dialog'
import { CloseButton, DialogContent, RateLink } from './styles'
import { Title } from '@/components/Typography'
import { X } from 'phosphor-react'
import { LoginButton } from '@/components/LoginButton'

interface RatingButtonProps {
  isAuthenticated: boolean
  isCommentPanelOpen: boolean
  setIsCommentPanelOpen(state: boolean): void
}

export function RatingButton({
  isAuthenticated,
  isCommentPanelOpen,
  setIsCommentPanelOpen,
}: RatingButtonProps) {
  if (isAuthenticated) {
    return (
      <RateLink
        color={'purple100'}
        visibility={isCommentPanelOpen ? 'disabled' : 'enabled'}
        onClick={() => setIsCommentPanelOpen(true)}
      >
        Avaliar
      </RateLink>
    )
  }

  return (
    <Dialog
      trigger={
        <Title color="purple100" style={{ cursor: 'pointer' }}>
          Avaliar
        </Title>
      }
    >
      <DialogContent>
        <CloseButton>
          <X size={18} color="#8D95AF" weight="bold" />
        </CloseButton>

        <Title>Faça login para deixar sua avaliação</Title>

        <LoginButton type="google" callbackUrl="/explorar" />
        <LoginButton type="github" callbackUrl="/explorar" />
      </DialogContent>
    </Dialog>
  )
}
