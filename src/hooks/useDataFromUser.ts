import { api } from '@/lib/axios'
import { Book, Rating, User } from '@prisma/client'
import { useQuery } from 'react-query'

export interface IAnalytics {
  data: User
  ratings: (Rating & {
    book: Book
    user: User
  })[]
  pagesRead: number
  booksRead: number
  authorsRead: number
  categorieMostRead: string
}

interface UseDataFromUserProps {
  userId: string
  search: string
}

export function useDataFromUser({ userId, search }: UseDataFromUserProps) {
  const { data: dataFromUser } = useQuery<IAnalytics>(
    ['myRatings', userId],
    async () => {
      const { data } = await api.get(`/user/${userId}`)

      return data?.analyticsFromUser ?? []
    },
  )

  const ratings = dataFromUser?.ratings.filter((rating) => {
    return (
      rating.book.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
      rating.book.author.toLowerCase().includes(search.toLocaleLowerCase())
    )
  })

  return { dataFromUser, ratings }
}
