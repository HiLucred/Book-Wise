import { Categorie, Container } from './styles'
import { useCategoriesData } from '@/hooks/useCategoriesData'

interface CategoriesProps {
  currentCategory: string | null
  setCurrentCategory: (category: string | null) => void
}

export function Categories({
  currentCategory,
  setCurrentCategory,
}: CategoriesProps) {
  const categories = useCategoriesData()

  return (
    <Container>
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
    </Container>
  )
}
