import { api } from '@/lib/axios'
import { Book } from '@prisma/client'
import { useQuery } from 'react-query'

interface PopularBooks extends Book {
  avgRating: number
  alreadyRead: boolean
}

export function usePopularBooksData() {
  const { data: popularBooks } = useQuery<PopularBooks[]>(
    ['popularBooks'],
    async () => {
      const { data } = await api.get('/books/popular')

      return data?.booksWithAvgRating ?? []
    },
  )

  return popularBooks
}
