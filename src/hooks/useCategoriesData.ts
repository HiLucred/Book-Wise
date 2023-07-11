import { api } from '@/lib/axios'
import { Category } from '@prisma/client'
import { useQuery } from 'react-query'

export function useCategoriesData() {
  const { data: categories } = useQuery<Category[]>(
    ['categories'],
    async () => {
      const { data } = await api.get('/books/categories')

      return data?.categories ?? []
    },
  )

  return categories
}
