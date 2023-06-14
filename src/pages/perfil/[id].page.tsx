import { Container, DataNotFoundBox, MyRatings } from './styles'
import { RatingBox } from './components/RatingBox'
import { Header } from './components/Header'
import { Analytics } from './components/Analytics'
import { useQuery } from 'react-query'
import { api } from '@/lib/axios'
import { User, Rating, Book } from '@prisma/client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export interface IAnalytics {
  data: User
  ratings: (Rating & {
    book: Book
  })[]
  pagesRead: number
  booksRead: number
  authorsRead: number
  categorieMostRead: string
}

export default function Perfil() {
  const [search, setSearch] = useState('')

  const router = useRouter()
  const userId = router.query.id as string

  const { data: dataFromUser } = useQuery<IAnalytics>(
    ['myRatings', userId],
    async () => {
      const { data } = await api.get(`/user/${userId}`)

      return data?.analyticsFromUser ?? []
    }
  )

  const ratingsFiltered = dataFromUser?.ratings.filter((rating) => {
    return (
      rating.book.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
      rating.book.author.toLowerCase().includes(search.toLocaleLowerCase())
    )
  })

  useEffect(() => {
    if (!userId) {
      router.push('/')
    }
  }, [userId, router])

  return (
    <Container>
      {dataFromUser?.data ? (
        <>
          <div>
            <Header setSearch={setSearch} />
            <MyRatings>
              {ratingsFiltered?.map((rating) => {
                return (
                  <RatingBox
                    key={rating.id}
                    name={rating.book.name}
                    created_at={String(rating.created_at)}
                    cover_url={rating.book.cover_url}
                    description={rating.description}
                    rate={rating.rate}
                    author={rating.book.author}
                  />
                )
              })}
            </MyRatings>
          </div>

          <Analytics analytics={dataFromUser} />
        </>
      ) : (
        <DataNotFoundBox>
          Você ainda não possui nenhuma leitura, portanto seus dados não foram
          carregados.
          <br></br>
          Faça avaliações para poder guardar suas leituras :)
        </DataNotFoundBox>
      )}
    </Container>
  )
}
