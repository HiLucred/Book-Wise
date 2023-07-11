import { ComponentProps } from 'react'
import { Paragraph } from '../Typography'

interface TextComment extends ComponentProps<typeof Paragraph> {
  children: string
}

export function TextComment({ children, ...rest }: TextComment) {
  return <Paragraph {...rest}>{children}</Paragraph>
}
