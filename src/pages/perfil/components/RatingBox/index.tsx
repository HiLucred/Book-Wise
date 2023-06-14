import { BookDetails, Container, Info, Rating } from './styles'
import { Paragraph, Title } from '@/components/Typography'
import { Stars } from '@/components/Stars'
import { formatDateDistanceToNow } from '@/utils/date-fns'
import Image from 'next/image'

interface RatingProps {
  name: string
  created_at: string
  cover_url: string
  description: string
  rate: number
  author: string
}

export function RatingBox({
  name,
  created_at,
  cover_url,
  author,
  rate,
  description,
}: RatingProps) {
  return (
    <Container>
      <Title size={'small'} color={'gray300'}>
        {formatDateDistanceToNow(new Date(created_at))}
      </Title>

      <Rating>
        <Info>
          <Image src={`/${cover_url}`} alt='' width={98} height={134} />
          <BookDetails>
            <Title weight={'bold'}>{name}</Title>
            <Title size={'small'} color={'gray400'}>
              {author}
            </Title>
            <Stars rating={rate} />
          </BookDetails>
        </Info>
        <Paragraph>{description}</Paragraph>
      </Rating>
    </Container>
  )
}
