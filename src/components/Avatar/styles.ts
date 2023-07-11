import { styled } from '../../../stitches.config'
import Image from 'next/image'

export const Container = styled(Image, {
  borderRadius: '$full',
  border: '1px solid $gradientVertical',
  marginRight: '1rem',
  cursor: 'pointer',

  '&:hover': {
    opacity: 0.8,
    transition: '0.3s',
  },
})
