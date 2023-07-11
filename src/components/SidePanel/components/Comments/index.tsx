import { Title } from '@/components/Typography'
import { Container } from './styles'
import { NewCommentForm } from '../NewCommentForm'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { CurrentBook } from '../..'
import { Comment } from '@/components/Comment/index'
import { RatingButton } from '../RatingButton'

interface CommentsProps {
  book: CurrentBook | undefined
}

export function Comments({ book }: CommentsProps) {
  const session = useSession()
  const isAuthenticated = session.status === 'authenticated'

  const [isCommentPanelOpen, setIsCommentPanelOpen] = useState(false)

  return (
    <Container>
      <header>
        <Title size={'small'}>Avaliações</Title>

        <RatingButton
          isAuthenticated={isAuthenticated}
          isCommentPanelOpen={isCommentPanelOpen}
          setIsCommentPanelOpen={setIsCommentPanelOpen}
        />
      </header>

      {isAuthenticated && (
        <NewCommentForm
          enabled={isCommentPanelOpen}
          closeCommentForm={setIsCommentPanelOpen}
          bookId={String(book?.id)}
        />
      )}

      {book?.ratings.map((rating) => {
        return (
          <Comment.Root color="default">
            <Comment.Header rating={rating} />
            <Comment.Text>{rating.description}</Comment.Text>
          </Comment.Root>
        )
      })}
    </Container>
  )
}
