import Image from 'next/image'
import { Title } from '@/components/Typography'
import { Stars } from '@/components/Stars'
import { useQuery } from 'react-query'
import { api } from '@/lib/axios'
import { BookOpen, BookmarkSimple } from 'phosphor-react'
import { theme } from '../../../../../stitches.config'
import { Comment } from './components/Comment'
import { LoginDialogTrigger } from './components/LoginDialogTrigger'
import { Book, Category, Rating, User } from '@prisma/client'
import { useSession } from 'next-auth/react'
import { NewCommentForm } from './components/NewCommentForm'
import { useState } from 'react'
import {
  About,
  BookBox,
  BookDetail,
  CategoryBox,
  Comments,
  Container,
  Info,
  Pages,
} from './styles'

interface SidePanelProps {
  idBook: string
}

interface ICurrentBook extends Book {
  categories: {
    category: Category
  }[]
  ratings: (Rating & {
    user: User
  })[]
}

export function SidePanel({ idBook }: SidePanelProps) {
  const session = useSession()
  const isAuthenticated = session.status === 'authenticated'
  const {
    colors: { green100 },
  } = theme
  const [newCommentOpen, setNewCommentOpen] = useState(false)

  const { data: currentBook } = useQuery<ICurrentBook>(
    ['book', idBook],
    async () => {
      const { data } = await api.get(`/books/${idBook}`)

      return data?.book ?? []
    }
  )

  const ratingsLength = currentBook?.ratings.length ?? 0

  return (
    <Container>
      <BookDetail>
        <BookBox>
          <Image
            src={`/${currentBook?.cover_url}`}
            alt=''
            width={171.65}
            height={242}
          />
          <Info>
            <div>
              <Title weight={'bold'}>{currentBook?.name}</Title>
              <Title color={'gray400'}>{currentBook?.author}</Title>
            </div>
            <div>
              <Stars rating={4} />
              <Title size={'small'} color={'gray400'}>
                {ratingsLength} {ratingsLength > 1 ? 'avaliações' : 'avaliação'}
              </Title>
            </div>
          </Info>
        </BookBox>

        <About>
          <CategoryBox>
            <BookmarkSimple size={24} color={`${green100}`} />
            <div>
              <Title size={'small'} color={'gray300'}>
                Categoria
              </Title>
              <Title weight={'bold'}>
                {currentBook?.categories.map(
                  ({ category }) => `${category.name}  ${' '}`
                )}
              </Title>
            </div>
          </CategoryBox>

          <Pages>
            <BookOpen size={24} color={`${green100}`} />
            <div>
              <Title size={'small'} color={'gray300'}>
                Páginas
              </Title>
              <Title weight={'bold'}>{currentBook?.total_pages}</Title>
            </div>
          </Pages>
        </About>
      </BookDetail>

      <Comments>
        <header>
          <Title size={'small'}>Avaliações</Title>

          {isAuthenticated ? (
            <Title
              style={{
                cursor: 'pointer',
                visibility: newCommentOpen ? 'hidden' : 'visible',
              }}
              weight={'bold'}
              color={'purple100'}
              onClick={() => setNewCommentOpen(true)}
            >
              Avaliar
            </Title>
          ) : (
            <LoginDialogTrigger
              content={
                <Title
                  style={{ cursor: 'pointer' }}
                  weight={'bold'}
                  color={'purple100'}
                >
                  Avaliar
                </Title>
              }
            />
          )}
        </header>

        {isAuthenticated && (
          <NewCommentForm
            enabled={newCommentOpen}
            closeCommentForm={setNewCommentOpen}
            bookId={String(currentBook?.id)}
          />
        )}

        {currentBook?.ratings.map((rating) => {
          return (
            <>
              <Comment comment={rating} />
            </>
          )
        })}
      </Comments>
    </Container>
  )
}
