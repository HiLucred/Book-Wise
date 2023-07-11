import { Title } from '@/components/Typography'
import { About, BookBox, Container, CategoryBox, Info, Pages } from './styles'
import { Stars } from '@/components/Stars'
import Image from 'next/image'
import { BookOpen, BookmarkSimple } from 'phosphor-react'
import { CurrentBook } from '../..'

interface BookDetailsProps {
  book: CurrentBook | undefined
}

export function BookDetails({ book }: BookDetailsProps) {
  const ratingsLength = book?.ratings.length ?? 0

  return (
    <Container>
      <BookBox>
        <Image
          src={`/${book?.cover_url}`}
          alt={`${book?.name}`}
          width={171.65}
          height={242}
        />

        <Info>
          <div>
            <Title weight={'bold'}>{book?.name}</Title>
            <Title color={'gray400'}>{book?.author}</Title>
          </div>

          <div>
            <Stars rating={4} />
            <Title size={'small'} color={'gray400'}>
              {ratingsLength} {ratingsLength > 1 ? 'avaliações' : 'avaliação'}
            </Title>
          </div>
        </Info>
      </BookBox>

      <About>
        <CategoryBox>
          <BookmarkSimple size={24} />

          <div>
            <Title size={'small'} color={'gray300'}>
              Categoria
            </Title>

            <Title weight={'bold'} css={{ display: 'flex' }}>
              {book?.categories.map(({ category }) => {
                return (
                  <div key={category.id}>
                    {category.name.padStart(category.name.length + 2)}{' '}
                  </div>
                )
              })}
            </Title>
          </div>
        </CategoryBox>

        <Pages>
          <BookOpen size={24} />

          <div>
            <Title size={'small'} color={'gray300'}>
              Páginas
            </Title>

            <Title weight={'bold'}>{book?.total_pages}</Title>
          </div>
        </Pages>
      </About>
    </Container>
  )
}
