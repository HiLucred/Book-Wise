import Image from 'next/image'
import { styled } from '../../../stitches.config'
import { Paragraph, Title } from '../Typography'
import { Book, Rating, User } from '@prisma/client'
import { formatDateDistanceToNow } from '@/utils/date-fns'
import { Stars } from '../Stars'
import { useShowMore } from '@/hooks/useShowMore'

interface InfoBookCommentProps {
  rating: Rating & {
    book: Book
    user: User
  }
  type?: 'default' | 'compact'
}

export function InfoBookComment({
  rating,
  type = 'default',
}: InfoBookCommentProps) {
  const isCompact = type === 'compact'
  const maxCharacterLimit = rating.description.length > 100

  return (
    <Container>
      <Image
        src={`/${rating.book.cover_url}`}
        alt={rating.book.name}
        width={108}
        height={152}
      />

      <Text>
        <HeaderText>
          {isCompact && (
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
          {maxCharacterLimit
            ? useShowMore(String(rating.description))
            : rating.description}
        </Paragraph>
      </Text>
    </Container>
  )
}

export const Container = styled('div', {
  display: 'flex',
  gap: '1.25rem',
})

export const Text = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',

  p: {
    marginTop: '1.25rem',
  },
})

export const HeaderText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const DateAndRate = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '0.75rem',
})
