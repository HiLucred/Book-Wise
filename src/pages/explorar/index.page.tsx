import { useState } from 'react'
import { Binoculars, MagnifyingGlass } from 'phosphor-react'
import { Container, Header, SearchBar } from './styles'
import { Categories } from './components/Categories'
import { Books } from './components/Books'
import { HeaderTitle } from '@/components/HeaderTitle'

export default function Explorar() {
  const [currentCategory, setCurrentCategory] = useState<string | null>(null)
  const [search, setSearch] = useState('')

  return (
    <Container>
      <Header>
        <HeaderTitle icon={Binoculars} title="Explorar" />

        <SearchBar>
          <input
            type="text"
            placeholder="Buscar livro ou autor"
            onChange={({ target }) => setSearch(target.value)}
            value={search}
          />

          <MagnifyingGlass size={20} />
        </SearchBar>
      </Header>

      <Categories
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />

      <Books currentCategory={currentCategory} search={search} />
    </Container>
  )
}
