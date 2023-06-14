import Image from 'next/image'
import { styled } from '../../../../../../../stitches.config'

export const Container = styled('div', {
  width: '100%',
  marginBottom: '0.75rem',
  padding: '1.5rem',
  borderRadius: '$md',
  backgroundColor: '$gray700',
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '1.25rem',
})

export const Avatar = styled(Image, {
  borderRadius: '$full',
  border: '1px solid $gradientVertical',
  marginRight: '1rem',
})

export const UserInfo = styled('div', {
  flex: 1,
})
