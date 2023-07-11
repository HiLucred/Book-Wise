import Image from 'next/image'
import { Container, Hero, LoginContainer } from './styles'
import logo from '@/assets/logo.png'
import { Paragraph, Title } from '@/components/Typography'
import { LoginButton } from '@/components/LoginButton'

export default function Login() {
  return (
    <Container>
      <Hero>
        <Image src={logo} alt="Book Wise Log" />
      </Hero>

      <LoginContainer>
        <Title size={'big'} color={'gray100'}>
          Boas vindas!
        </Title>

        <Paragraph color={'gray300'}>
          Faça seu login ou acesse como visitante.
        </Paragraph>

        <LoginButton type="google" callbackUrl="/explorar" />
        <LoginButton type="github" callbackUrl="/explorar" />
        <LoginButton type="guest" />
      </LoginContainer>
    </Container>
  )
}
