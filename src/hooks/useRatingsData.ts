import { useQuery } from 'react-query'
import { Book, Rating as PrismaRating, User } from '@prisma/client'
import { api } from '@/lib/axios'

interface Rating extends PrismaRating {
  book: Book
  user: User
}

export function useRatingsData() {
  const { data: ratings } = useQuery<Rating[]>(['ratings'], async () => {
    const { data } = await api.get('/ratings')

    return data?.ratings ?? []
  })

  return ratings
}
