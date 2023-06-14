import { Container } from './styles'
import { Title } from '@/components/Typography'
import { ReactNode } from 'react'

interface DataProps {
  title: string
  value: number | string
  iconName: ReactNode
}

export function Data({ title, value, iconName }: DataProps) {
  return (
    <Container>
      {iconName}
      <div>
        <Title weight={'bold'}>{value}</Title>
        <Title size={'small'} color={'gray300'}>
          {title}
        </Title>
      </div>
    </Container>
  )
}
