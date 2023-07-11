import { Container } from './styles'
import { BookCard } from '@/components/BookCard'
import { Dialog } from '@/components/Dialog'
import { SidePanel } from '@/components/SidePanel'
import { useBookData } from '@/hooks/useBookData'

interface BooksProps {
  currentCategory: string | null
  search: string
}

export function Books({ currentCategory, search }: BooksProps) {
  const books = useBookData({ category: currentCategory, search })

  return (
    <Container>
      {books?.map((book) => {
        return (
          <Dialog
            key={book.id}
            trigger={<BookCard book={book} variant="expanded" />}
          >
            <SidePanel idBook={book.id} />
          </Dialog>
        )
      })}
    </Container>
  )
}
