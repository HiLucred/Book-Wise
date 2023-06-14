import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { Title } from '@/components/Typography'
import { Stars } from '@/components/Stars'
import { Book } from '@prisma/client'
import { SidePanel } from '../SidePanel'
import { X } from 'phosphor-react'
import {
  CloseButton,
  Content,
  Info,
  Overlay,
  Text,
  TriggerCard,
} from './styles'

interface BookCardProps {
  book: Book & {
    avgRating: number
    alreadyRead: boolean
  }
}

export function BookCard({ book }: BookCardProps) {
  return (
    <Dialog.Root>
      <TriggerCard alreadyRead={book.alreadyRead}>
        <Image src={`/${book.cover_url}`} alt='' width={108} height={152} />
        <Info>
          <Text>
            <Title weight={'bold'} css={{width: '8rem'}}>{book.name}</Title>
            <Title size={'small'} color={'gray400'}>
              {book.author}
            </Title>
          </Text>
          <Stars rating={book.avgRating} />
        </Info>
      </TriggerCard>

      <Dialog.Portal>
        <Overlay />
        <Content>
          <CloseButton>
            <X size={32} color='white' />
          </CloseButton>
          <SidePanel idBook={book.id} />
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
