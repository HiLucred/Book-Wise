import { MagnifyingGlass, User } from 'phosphor-react'
import { Container, SearchBar } from './styles'
import { HeaderTitle } from '@/components/HeaderTitle'

interface HeaderProps {
  setSearch: (value: string) => void
}

export function Header({ setSearch }: HeaderProps) {
  return (
    <Container>
      <HeaderTitle icon={User} title="Perfil" />

      <SearchBar>
        <input
          type="text"
          placeholder="Buscar livro avaliado"
          onChange={({ target }) => setSearch(target.value)}
        />
        <button type="submit">Pesquisar</button>
        <MagnifyingGlass size={20} />
      </SearchBar>
    </Container>
  )
}
