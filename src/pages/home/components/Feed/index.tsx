import { SpanLink, Title } from '@/components/Typography'
import { Container, Header, LastReadHeader, MostyRecentReviews } from './styles'
import { ArrowArcRight, CaretRight, ChartLineUp } from 'phosphor-react'
import { RatingCard } from '@/components/RatingCard'
import { theme } from '../../../../../stitches.config'
import { useQuery } from 'react-query'
import { api } from '@/lib/axios'
import { Book, Rating, User } from '@prisma/client'
import { useSession } from 'next-auth/react'

interface IRating extends Rating {
  book: Book
  user: User
}

export function Feed() {
  const {
    colors: { green100 },
  } = theme

  const session = useSession()
  const isAuthenticated = session.status === 'authenticated'

  const { data: ratings } = useQuery<IRating[]>(['ratings'], async () => {
    const { data } = await api.get('/ratings')

    return data?.ratings ?? []
  })

  const { data: lastRead } = useQuery<IRating[]>(
    ['last-read', isAuthenticated],
    async () => {
      const { data } = await api.get('/last-read')

      return data?.lastRead ?? []
    },
    {
      enabled: isAuthenticated,
    }
  )

  return (
    <Container>
      <Header>
        <ChartLineUp size={24} color={`${green100}`} />
        <Title size={'big'} color={'gray100'}>
          Início
        </Title>
      </Header>

      {isAuthenticated && (
        <>
          <LastReadHeader>
            <Title size={'small'}>Sua última leitura </Title>
            <SpanLink href={`/perfil/${session.data.user.id}`} prefetch={false}>
              Ver todas <CaretRight />
            </SpanLink>
          </LastReadHeader>

          {lastRead?.map((item) => {
            return <RatingCard key={item.id} rating={item} type='compact' />
          })}
        </>
      )}

      <MostyRecentReviews>
        <Title size={'small'}>Avaliações mais recentes</Title>
        {ratings?.map((rating) => {
          return <RatingCard key={rating.id} rating={rating} />
        })}
      </MostyRecentReviews>
    </Container>
  )
}
