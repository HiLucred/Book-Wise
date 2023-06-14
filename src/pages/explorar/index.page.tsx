import { useState } from 'react'
import { Binoculars, MagnifyingGlass } from 'phosphor-react'
import { useQuery } from 'react-query'
import { theme } from '../../../stitches.config'
import { api } from '@/lib/axios'
import { Category, Book } from '@prisma/client'
import { Title } from '@/components/Typography'
import { BookCard } from './components/BookCard'
import {
  BooksContainer,
  Categorie,
  CategoriesContainer,
  Container,
  Header,
  SearchBar,
} from './styles'

interface IBooks extends Book {
  avgRating: number
  alreadyRead: boolean
}

export default function Explorar() {
  const [currentCategory, setCurrentCategory] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const {
    colors: { green100, gray500 },
  } = theme

  const { data: categories } = useQuery<Category[]>(
    ['categories'],
    async () => {
      const { data } = await api.get('/books/categories')

      return data?.categories ?? []
    }
  )

  const { data: books } = useQuery<IBooks[]>(
    ['books', currentCategory],
    async () => {
      const { data } = await api.get('/books/', {
        params: {
          category: currentCategory,
        },
      })

      return data?.books ?? []
    }
  )

  const filteredBooks = books?.filter((book) => {
    return (
      book.name.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
    )
  })

  return (
    <Container>
      <Header>
        <Title size={'big'} color={'gray100'}>
          <Binoculars size={24} color={`${green100}`} />
          Explorar
        </Title>

        <SearchBar>
          <input
            type='text'
            placeholder='Buscar livro ou autor'
            onChange={({ target }) => setSearch(target.value)}
            value={search}
          />

          <MagnifyingGlass size={20} color={`${gray500}`} />
        </SearchBar>
      </Header>

      <CategoriesContainer>
        <Categorie
          active={currentCategory === null}
          onClick={() => setCurrentCategory(null)}
        >
          Todos
        </Categorie>
        {categories?.map(({ id, name }) => {
          return (
            <Categorie
              key={id}
              active={currentCategory === id}
              onClick={() => setCurrentCategory(id)}
            >
              {name}
            </Categorie>
          )
        })}
      </CategoriesContainer>

      <BooksContainer>
        {filteredBooks?.map((book) => {
          return <BookCard key={book.id} book={book} />
        })}
      </BooksContainer>
    </Container>
  )
}
