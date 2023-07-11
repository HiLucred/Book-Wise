import { Container, Info, PageTitle, Seaparator } from './styles'
import { Title } from '@/components/Typography'
import { BookOpen, BookmarkSimple, Books, UserList } from 'phosphor-react'
import { Data } from '../Data'
import { formatDateToString } from '@/utils/date-fns'
import { Analytics } from '../../[id].page'
import Image from 'next/image'

interface AnalyticsProps {
  analytics: Analytics
}

export function Analytics({ analytics }: AnalyticsProps) {
  return (
    <Container>
      <PageTitle>
        <Image
          src={`${analytics.data.avatar_url}`}
          alt={`${analytics.data.name}`}
          width={72}
          height={72}
        />
        <Title size={'big'} weight={'bold'}>
          {analytics.data.name}
        </Title>
        <Title size={'small'} color={'gray400'}>
          membro desde {formatDateToString(new Date(analytics.data.created_at))}
        </Title>
      </PageTitle>

      <Seaparator />

      <Info>
        <Data value={analytics.pagesRead} icon={BookOpen}>
          Páginas lidas
        </Data>

        <Data value={analytics.booksRead} icon={BookmarkSimple}>
          Livros avaliados
        </Data>

        <Data value={analytics.authorsRead} icon={Books}>
          Autores lidos
        </Data>

        <Data value={analytics.categorieMostRead} icon={UserList}>
          Categoria mais lida
        </Data>
      </Info>
    </Container>
  )
}
