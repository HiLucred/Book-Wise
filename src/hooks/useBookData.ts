import { api } from '@/lib/axios'
import { Book as PrismaBook } from '@prisma/client'
import { useQuery } from 'react-query'

interface Book extends PrismaBook {
  avgRating: number
  alreadyRead: boolean
}

interface UseBookDataProps {
  category: string | null
  search: string
}

export function useBookData({ category, search }: UseBookDataProps) {
  const { data } = useQuery<Book[]>(['books', category], async () => {
    const { data } = await api.get('/books/', {
      params: {
        category,
      },
    })

    return data?.books ?? []
  })

  const books = data?.filter((book) => {
    return (
      book.name.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
    )
  })

  return books
}
