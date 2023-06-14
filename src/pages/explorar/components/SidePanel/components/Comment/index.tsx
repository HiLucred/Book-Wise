import { Paragraph, Title } from '@/components/Typography'
import { Container, Header, UserInfo } from './styles'
import { Stars } from '@/components/Stars'
import { Rating, User } from '@prisma/client'
import { formatDateDistanceToNow } from '@/utils/date-fns'
import { Avatar } from '@/components/Avatar'

interface CommentProps {
  comment: Rating & {
    user: User
  }
}

export function Comment({ comment }: CommentProps) {
  return (
    <Container>
      <Header>
        <Avatar
          avatar_url={`${comment.user.avatar_url}`}
          userId={comment.user.id}
        />

        <UserInfo>
          <Title weight={'bold'}>{comment.user.name}</Title>
          <Title size={'small'} color={'gray400'}>
            {formatDateDistanceToNow(new Date(comment.created_at))}
          </Title>
        </UserInfo>

        <Stars rating={comment.rate} />
      </Header>

      <Paragraph>{comment.description}</Paragraph>
    </Container>
  )
}
