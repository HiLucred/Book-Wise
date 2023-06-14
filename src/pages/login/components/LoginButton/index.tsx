import { signIn } from 'next-auth/react'
import { Container } from './styles'
import Image from 'next/image'
import googleIcon from '@/assets/google-icon.png'
import gitHubIcon from '@/assets/github-icon.png'
import rocketLaunchIcon from '../../../../assets/rocketlaunch-icon.png'
import { useRouter } from 'next/router'

interface LoginButtonProps {
  type: 'google' | 'github' | 'guest'
  callbackUrl?: '/' | '/explorar' | '/perfil'
}

export function LoginButton({ type, callbackUrl = '/' }: LoginButtonProps) {
  const router = useRouter()

  async function handleSignGoogle() {
    await signIn('google', { callbackUrl })
  }

  async function handleSignGitHub() {
    await signIn('github', { callbackUrl })
  }

  function handleSignGuest() {
    router.push('/')
  }

  const LOGIN_TYPE = {
    google: {
      loginFunction: () => handleSignGoogle(),
      icon: googleIcon,
      title: 'Entrar com Google',
    },
    github: {
      loginFunction: () => handleSignGitHub(),
      icon: gitHubIcon,
      title: 'Entrar com GitHub',
    },
    guest: {
      loginFunction: () => handleSignGuest(),
      icon: rocketLaunchIcon,
      title: 'Entrar como visitante',
    },
  }

  return (
    <Container onClick={LOGIN_TYPE[type].loginFunction}>
      <Image src={LOGIN_TYPE[type].icon} alt={''} />
      {LOGIN_TYPE[type].title}
    </Container>
  )
}
