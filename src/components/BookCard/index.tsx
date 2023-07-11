import { Book } from '@prisma/client'
import { Stars } from '../Stars'
import { Title } from '../Typography'
import { Container, Info, Text } from './styles'
import Image from 'next/image'

interface BookCardProps {
  book: Book & {
    avgRating: number
    alreadyRead: boolean
  }
  variant: 'compact' | 'expanded'
}

export function BookCard({ book, variant }: BookCardProps) {
  const imageSize = {
    compact: {
      width: 64,
      height: 94,
    },
    expanded: {
      width: 108,
      height: 152,
    },
  }

  return (
    <Container size={variant} alreadyRead={book.alreadyRead}>
      <Image
        src={`/${book.cover_url}`}
        alt={`/${book.name}`}
        width={imageSize[variant].width}
        height={imageSize[variant].height}
      />

      <Info>
        <Text>
          <Title weight={'bold'} css={{ width: '8rem' }}>
            {book.name}
          </Title>

          <Title size={'small'} color={'gray400'}>
            {book.author}
          </Title>
        </Text>

        <Stars rating={book.avgRating} />
      </Info>
    </Container>
  )
}
