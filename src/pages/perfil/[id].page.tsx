import { Content, DataNotFoundBox, MyRatings } from './styles'
import { Header } from './components/Header'
import { Analytics } from './components/Analytics'
import { User, Rating, Book } from '@prisma/client'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { Comment } from '@/components/Comment'
import { useDataFromUser } from '@/hooks/useDataFromUser'

export interface Analytics {
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

  const { dataFromUser, ratings } = useDataFromUser({ userId, search })
  const isThereUserData = dataFromUser?.data

  if (isThereUserData) {
    return (
      <Content>
        <div>
          <Header setSearch={setSearch} />

          <MyRatings>
            {ratings?.map((rating) => {
              return (
                <Comment.Root key={rating.id} color="default">
                  <Comment.InfoBook rating={rating} type="compact" />
                </Comment.Root>
              )
            })}
          </MyRatings>
        </div>

        <Analytics analytics={dataFromUser} />
      </Content>
    )
  }

  return (
    <DataNotFoundBox>
      Você ainda não possui nenhuma leitura, portanto seus dados não foram
      carregados.
      <br></br>
      Faça avaliações para poder guardar suas leituras :)
    </DataNotFoundBox>
  )
}
