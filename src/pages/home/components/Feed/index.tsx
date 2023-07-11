import { SpanLink, Title } from '@/components/Typography'
import { Container, LastReadHeader, MostyRecentReviews } from './styles'
import { CaretRight, ChartLineUp } from 'phosphor-react'
import { useSession } from 'next-auth/react'
import { HeaderTitle } from '@/components/HeaderTitle'
import { Comment } from '@/components/Comment'
import { useRatingsData } from '@/hooks/useRatingsData'
import { useLastReadData } from '@/hooks/useLastReadData'

export function Feed() {
  const session = useSession()
  const isAuthenticated = session.status === 'authenticated'
  const ratings = useRatingsData()
  const lastRead = useLastReadData(isAuthenticated)
  const containALastReading = lastRead?.length !== 0 && isAuthenticated

  return (
    <Container>
      <HeaderTitle icon={ChartLineUp} title="Início" />

      {containALastReading && (
        <>
          <LastReadHeader>
            <Title size={'small'}>Sua última leitura </Title>

            <SpanLink
              href={`/perfil/${session?.data?.user.id}`}
              prefetch={false}
            >
              Ver todas <CaretRight />
            </SpanLink>
          </LastReadHeader>

          {lastRead?.map((rating) => {
            return (
              <Comment.Root key={rating.id} color="compact">
                <Comment.InfoBook rating={rating} type="compact" />
              </Comment.Root>
            )
          })}
        </>
      )}

      <MostyRecentReviews>
        <Title size={'small'}>Avaliações mais recentes</Title>

        {ratings?.map((rating) => {
          return (
            <Comment.Root key={rating.id} color="default">
              <Comment.Header rating={rating} />
              <Comment.InfoBook rating={rating} />
            </Comment.Root>
          )
        })}
      </MostyRecentReviews>
    </Container>
  )
}
