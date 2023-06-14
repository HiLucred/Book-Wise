import { MagnifyingGlass, User } from 'phosphor-react'
import { Container, PageTitle, SearchBar } from './styles'
import { Title } from '@/components/Typography'
import { theme } from '../../../../../stitches.config'

interface HeaderProps {
  setSearch: (value: string) => void
}

export function Header({ setSearch }: HeaderProps) {
  const {
    colors: { green100, gray500 },
  } = theme

  return (
    <Container>
      <PageTitle>
        <User size={32} color={`${green100}`} />
        <Title size={'big'} weight={'bold'}>
          Perfil
        </Title>
      </PageTitle>

      <SearchBar>
        <input
          type='text'
          placeholder='Buscar livro avaliado'
          onChange={({ target }) => setSearch(target.value)}
        />
        <button type='submit'>Pesquisar</button>
        <MagnifyingGlass size={20} color={`${gray500}`} />
      </SearchBar>
    </Container>
  )
}
