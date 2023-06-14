import { useRouter } from 'next/router'
import { Container } from './styles'

interface AvatarProps {
  avatar_url: string
  userId: string
}

export function Avatar({ avatar_url, userId }: AvatarProps) {
  const router = useRouter()

  return (
    <Container
      src={avatar_url}
      alt=''
      width={32}
      height={32}
      onClick={() => router.push(`/perfil/${userId}`)}
    />
  )
}
