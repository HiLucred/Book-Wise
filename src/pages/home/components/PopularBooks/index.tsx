import Image from 'next/image'
import { SpanLink, Title } from '@/components/Typography'
import { Box, Container, Header, Info, Text } from './styles'
import { Stars } from '@/components/Stars'
import { CaretRight } from 'phosphor-react'
import { useQuery } from 'react-query'
import { Book } from '@prisma/client'
import { api } from '@/lib/axios'

interface IPopularBooks extends Book {
  avgRating: number
}

export function PopularBooks() {
  const { data: books } = useQuery<IPopularBooks[]>(
    ['popularBooks'],
    async () => {
      const { data } = await api.get('/books/popular')

      return data?.booksWithAvgRating ?? []
    }
  )

  return (
    <Container>
      <Header>
        <Title size={'small'}>Livros populares</Title>
        <SpanLink href={'/explorar'} prefetch={false}>
          Ver todos
          <CaretRight />
        </SpanLink>
      </Header>

      {books?.map((item) => {
        return (
          <Box key={item.id}>
            <Image src={`/${item.cover_url}`} alt='' width={64} height={94} />
            <Info>
              <Text>
                <Title>{item.name}</Title>
                <Title size={'small'} color={'gray400'}>
                  {item.author}
                </Title>
              </Text>
              <Stars rating={item.avgRating} />
            </Info>
          </Box>
        )
      })}
    </Container>
  )
}
