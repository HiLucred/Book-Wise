import { SpanLink, Title } from '@/components/Typography'
import { Container, Header } from './styles'
import { CaretRight } from 'phosphor-react'
import { usePopularBooksData } from '@/hooks/usePopularBooksData'
import { BookCard } from '@/components/BookCard'

export function PopularBooks() {
  const popularBooks = usePopularBooksData()

  return (
    <Container>
      <Header>
        <Title size={'small'}>Livros populares</Title>

        <SpanLink href={'/explorar'} prefetch={false}>
          Ver todos
          <CaretRight />
        </SpanLink>
      </Header>

      {popularBooks?.map((book) => {
        return <BookCard key={book.id} book={book} variant="compact" />
      })}
    </Container>
  )
}
