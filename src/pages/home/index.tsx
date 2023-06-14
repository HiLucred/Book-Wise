import { Container } from './styles'
import { Feed } from './components/Feed'
import { PopularBooks } from './components/PopularBooks'

export default function Home() {
  return (
    <Container>
      <Feed />
      <PopularBooks />
    </Container>
  )
}
