import { Title } from '../Typography'
import { ComponentProps, ElementType } from 'react'
import { Container } from './styles'

interface HeaderTitle extends ComponentProps<typeof Container> {
  title: string
  icon: ElementType
}

export function HeaderTitle({ title, icon: Icon, ...rest }: HeaderTitle) {
  return (
    <Container {...rest}>
      <Icon size={24} />
      <Title size={'big'} color={'gray100'}>
        {title}
      </Title>
    </Container>
  )
}
