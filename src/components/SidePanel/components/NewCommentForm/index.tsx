import Image from 'next/image'
import { Stars } from '@/components/Stars'
import { ActionButtons, Button, Container, Header, TextArea } from './styles'
import { Check, X } from 'phosphor-react'
import { useSession } from 'next-auth/react'
import { ErrorMessage, Title } from '@/components/Typography'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '@/lib/axios'
import { useEffect, useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { theme } from '../../../../../stitches.config'

const NewCommentFormSchema = z.object({
  comment: z
    .string()
    .min(1, {
      message:
        'Digite uma avaliação com pelo menos 1 caractere e no máximo 450.',
    })
    .max(450, {
      message:
        'Digite uma avaliação com pelo menos 1 caractere e no máximo 450.',
    }),
  rate: z
    .number()
    .min(1, { message: 'Selecione uma avaliação de 1 a 5.' })
    .max(5, { message: 'Selecione uma avaliação de 1 a 5.' }),
})

type NewCommentFormData = z.infer<typeof NewCommentFormSchema>

interface NewCommentProps {
  bookId: string
  enabled: boolean
  closeCommentForm: (state: boolean) => void
}

export function NewCommentForm({
  bookId: book_id,
  enabled,
  closeCommentForm,
}: NewCommentProps) {
  const session = useSession()
  const [currentRate, setCurrentRate] = useState(0)

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
    setValue,
  } = useForm<NewCommentFormData>({
    resolver: zodResolver(NewCommentFormSchema),
  })

  const {
    colors: { purple100, green100 },
  } = theme

  const queryClient = useQueryClient()

  useEffect(() => {
    setValue('rate', currentRate)
  }, [currentRate, setValue])

  const { mutateAsync: handleSendDataForm } = useMutation(
    async (data: NewCommentFormData) => {
      await api.post('/comment', {
        book_id,
        rate: currentRate,
        description: data.comment,
      })
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['book', book_id])
        queryClient.invalidateQueries(['books'])

        closeCommentForm(false)
        reset()
      },
    },
  )

  async function handleSubmitNewComment(data: NewCommentFormData) {
    try {
      await handleSendDataForm(data)
    } catch (err) {
      alert('📢 Você já avaliou este título. 📢')
    }
  }

  return (
    <Container
      onSubmit={handleSubmit(handleSubmitNewComment)}
      enabled={enabled ? 'open' : 'close'}
    >
      <Header>
        <Image
          src={`${session.data?.user.avatar_url}`}
          alt={''}
          width={40}
          height={40}
        />

        <Title>{session.data?.user.name}</Title>

        <Stars rating={currentRate} setCurrentRate={setCurrentRate} />
      </Header>

      <TextArea {...register('comment')} />

      <ActionButtons>
        <Button onClick={() => closeCommentForm(false)}>
          <X size={22} color={`${purple100}`} />
        </Button>

        <Button type="submit" disabled={isSubmitting}>
          <Check size={22} color={`${green100}`} />
        </Button>
      </ActionButtons>

      {errors?.comment && (
        <ErrorMessage>{errors?.comment.message}</ErrorMessage>
      )}

      <br></br>

      {errors?.rate && <ErrorMessage>{errors?.rate.message}</ErrorMessage>}
    </Container>
  )
}
