import { useQuery } from 'react-query'
import { Book, Rating as PrismaRating, User } from '@prisma/client'
import { api } from '@/lib/axios'

interface Rating extends PrismaRating {
  book: Book
  user: User
}

export function useLastReadData(isAuthenticated: boolean) {
  const { data: lastRead } = useQuery<Rating[]>(
    ['last-read', isAuthenticated],
    async () => {
      const { data } = await api.get('/last-read')

      return data?.lastRead ?? []
    },
    {
      enabled: isAuthenticated,
    },
  )

  return lastRead
}
