import { Container } from './styles'
import { Title } from '@/components/Typography'
import { ElementType } from 'react'

interface DataProps {
  children: string
  value: number | string
  icon: ElementType
}

export function Data({ children, value, icon: Icon }: DataProps) {
  return (
    <Container>
      <Icon size={32} />

      <div>
        <Title weight={'bold'}>{value}</Title>
        <Title size={'small'} color={'gray300'}>
          {children}
        </Title>
      </div>
    </Container>
  )
}
