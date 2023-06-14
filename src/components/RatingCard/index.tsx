import Image from 'next/image'
import { Paragraph, Title } from '../Typography'
import { Stars } from '../Stars'
import { Book, Rating, User } from '@prisma/client'
import { formatDateDistanceToNow } from '@/utils/date-fns'
import { Avatar } from '../Avatar'
import { useShowMore as ShowMore } from '@/hooks/useShowMore'
import {
  Body,
  Container,
  DateAndRate,
  Header,
  HeaderText,
  InfoGroup,
  Text,
  UserInfo,
} from './styles'

interface RatingCardProps {
  rating: Rating & {
    book: Book
    user: User
  }
  type?: 'default' | 'compact'
}

export function RatingCard({ rating, type = 'default' }: RatingCardProps) {
  return (
    <Container color={type === 'default' ? 'default' : 'compact'}>
      {type === 'default' && (
        <Header>
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
        </Header>
      )}

      <Body>
        <Image
          src={`/${rating.book.cover_url}`}
          alt={rating.book.name}
          width={108}
          height={152}
        />
        <Text>
          <HeaderText>
            {type === 'compact' && (
              <DateAndRate>
                <Title size={'small'} color={'gray400'}>
                  {formatDateDistanceToNow(new Date(rating.created_at))}
                </Title>
                <Stars rating={rating.rate} />
              </DateAndRate>
            )}

            <Title>{rating.book.name}</Title>
            <Title size={'small'} color={'gray400'}>
              {rating.book.author}
            </Title>
          </HeaderText>

          <Paragraph>
            {rating.description.length > 100
              ? ShowMore(String(rating.description))
              : rating.description}
          </Paragraph>
        </Text>
      </Body>
    </Container>
  )
}
