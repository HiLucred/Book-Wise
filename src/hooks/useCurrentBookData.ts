import { CurrentBook } from '@/components/SidePanel'
import { api } from '@/lib/axios'
import { useQuery } from 'react-query'

export function useCurrentBookData(idBook: string) {
  const { data: book } = useQuery<CurrentBook>(['book', idBook], async () => {
    const { data } = await api.get(`/books/${idBook}`)

    return data?.book ?? []
  })

  return book
}
