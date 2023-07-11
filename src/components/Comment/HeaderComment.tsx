import { formatDateDistanceToNow } from '@/utils/date-fns'
import { styled } from '../../../stitches.config'
import { Avatar } from '../Avatar'
import { Title } from '../Typography'
import { Stars } from '../Stars'
import { Book, Rating, User } from '@prisma/client'

interface HeaderCommentProps {
  rating: Rating & {
    book: Book
    user: User
  }
}

export function HeaderComment({ rating }: HeaderCommentProps) {
  return (
    <Container>
      <InfoGroup>
        <Avatar
          avatar_url={`${rating.user.avatar_url}`}
          userId={rating.user.id}
        />

        <UserInfo>
          <Title color={'gray100'}>{rating.user.name}</Title>
          <Title size={'small'} color={'gray400'}>
            {formatDateDistanceToNow(new Date(rating.created_at))}
          </Title>
        </UserInfo>
      </InfoGroup>

      <Stars rating={rating.rate} />
    </Container>
  )
}

export const Container = styled('header', {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '2rem',
  justifyContent: 'space-between',
})

export const InfoGroup = styled('div', {
  display: 'flex',
})

export const UserInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})
