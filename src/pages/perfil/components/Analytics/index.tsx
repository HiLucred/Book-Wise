import { Container, Info, PageTitle, Seaparator } from './styles'
import { Title } from '@/components/Typography'
import { BookOpen, BookmarkSimple, Books, UserList } from 'phosphor-react'
import { Data } from './components/Data'
import {  formatDateToString } from '@/utils/date-fns'
import { theme } from '../../../../../stitches.config'
import { IAnalytics } from '../../[id].page'
import Image from 'next/image'

interface AnalyticsProps {
  analytics: IAnalytics
}

export function Analytics({ analytics }: AnalyticsProps) {
  const {
    colors: { green100 },
  } = theme
  
  return (
    <Container>
      <PageTitle>
        <Image
          src={`${analytics.data.avatar_url}`}
          alt=''
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
        <Data
          title='Páginas lidas'
          value={analytics.pagesRead}
          iconName={<BookOpen color={`${green100}`} size={32} />}
        />
        <Data
          title='Livros avaliados'
          value={analytics.booksRead}
          iconName={<BookmarkSimple color={`${green100}`} size={32} />}
        />
        <Data
          title='Autores lidos'
          value={analytics.authorsRead}
          iconName={<Books color={`${green100}`} size={32} />}
        />
        <Data
          title='Categoria mais lida'
          value={analytics.categorieMostRead}
          iconName={<UserList color={`${green100}`} size={32} />}
        />
      </Info>
    </Container>
  )
}
