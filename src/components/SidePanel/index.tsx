import { Book, Category, Rating, User } from '@prisma/client'
import { CloseButton, Container } from './styles'
import { BookDetails } from './components/BookDetails'
import { Comments } from './components/Comments'
import { X } from 'phosphor-react'
import { useCurrentBookData } from '@/hooks/useCurrentBookData'

interface SidePanelProps {
  idBook: string
}

export interface CurrentBook extends Book {
  categories: {
    category: Category
  }[]
  ratings: (Rating & {
    book: Book
    user: User
  })[]
}

export function SidePanel({ idBook }: SidePanelProps) {
  const book = useCurrentBookData(idBook)

  return (
    <Container>
      <CloseButton>
        <X size={32} color="white" />
      </CloseButton>

      <BookDetails book={book} />
      <Comments book={book} />
    </Container>
  )
}
