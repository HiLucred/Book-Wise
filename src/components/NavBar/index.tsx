import { Title } from '../Typography'
import { signOut, useSession } from 'next-auth/react'
import { Binoculars, ChartLineUp, User, SignOut } from 'phosphor-react'
import { useRouter } from 'next/router'
import { Container, Item, List, Menu, UserBox, UserButton } from './styles'
import logo from '@/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'

export function Navbar() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const authenticated = status === 'authenticated'

  async function handleSignOut() {
    await signOut()
  }

  async function handleSignIn() {
    router.push('/login')
  }

  return (
    <Container>
      <Menu>
        <Link href={'/'} prefetch={false}>
          <Image src={logo} alt="" width={128} height={32} />
        </Link>

        <List>
          <Item isActive={router.asPath === '/'}>
            <ChartLineUp size={24} />
            <Link href={'/'} prefetch={false}>
              Início
            </Link>
          </Item>

          <Item isActive={router.asPath === '/explorar'}>
            <Binoculars size={24} />
            <Link href={'/explorar'} prefetch={false}>
              Explorar
            </Link>
          </Item>

          {authenticated && (
            <Item isActive={router.asPath === `/perfil/${session?.user.id}`}>
              <User size={24} />
              <Link href={`/perfil/${session?.user.id}`} prefetch={false}>
                Perfil
              </Link>
            </Item>
          )}
        </List>
      </Menu>

      <UserBox>
        {authenticated && (
          <Image
            src={`${session?.user.avatar_url}`}
            alt="User Image"
            width={32}
            height={32}
          />
        )}

        <Title size={'small'} color={'gray200'} weight={'regular'}>
          {authenticated ? session?.user?.name : 'Fazer login'}
        </Title>

        <UserButton onClick={authenticated ? handleSignOut : handleSignIn}>
          <SignOut
            width={20}
            height={20}
            color={authenticated ? '#F75A68' : '#50B2C0'}
          />
        </UserButton>
      </UserBox>
    </Container>
  )
}
