import { useState } from 'react'
import { Container } from './styles'
import { Star } from 'phosphor-react'

interface RatingProps {
  rating: number
  setCurrentRate?: (rating: number) => void
}

export function Stars({ rating, setCurrentRate }: RatingProps) {
  const [previewRating, setPreviewRating] = useState(0)
  const isEditable = !!setCurrentRate
  const ratingvalue = isEditable ? previewRating : rating

  function handleMouseEnter(current: number) {
    if (isEditable) {
      setPreviewRating(current)
    }
  }

  function handleMouseLeave() {
    if (isEditable) {
      setPreviewRating(rating)
    }
  }

  function handleSetRating() {
    if (isEditable) {
      setCurrentRate(previewRating)
    }
  }

  return (
    <Container css={isEditable ? { cursor: 'pointer' } : { cursor: 'auto' }}>
      {Array.from({ length: 5 }).map((_, index) => {
        return (
          <Star
            key={`${index}`}
            weight={index + 1 <= ratingvalue ? 'fill' : 'regular'}
            onMouseEnter={() => handleMouseEnter(index + 1)}
            onMouseLeave={handleMouseLeave}
            onClick={handleSetRating}
          />
        )
      })}
    </Container>
  )
}
