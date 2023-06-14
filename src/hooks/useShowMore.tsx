import { Title } from '@/components/Typography'
import { useState } from 'react'

const MAX_LENGTH = 100

export function useShowMore(text: string) {
  const [showMore, setShowMore] = useState(() => {
    return text.length >= MAX_LENGTH
  })

  const cutText = text.slice(0, 100).concat('...')

  return (
    <>
      {showMore ? (
        <>
          {cutText}
          <Title
            color={'purple100'}
            onClick={() => setShowMore(false)}
            css={{ cursor: 'pointer' }}
          >
            ver mais
          </Title>
        </>
      ) : (
        <>
          {text}
          <Title
            color={'purple100'}
            onClick={() => setShowMore(true)}
            css={{ cursor: 'pointer' }}
          >
            ver menos
          </Title>
        </>
      )}
    </>
  )
}
