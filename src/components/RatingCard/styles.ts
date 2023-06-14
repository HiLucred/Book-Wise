import Image from 'next/image'
import { styled } from '../../../stitches.config'
import { Stars } from '../Stars'

export const Container = styled('div', {
  padding: '$6',
  borderRadius: '$md',
  maxWidth: 608,
  marginBottom: '0.75rem',

  variants: {
    color: {
      default: {
        backgroundColor: '$gray700',
      },
      compact: {
        backgroundColor: '$gray600',
      },
    },
  },

  defaultVariants: {
    color: 'default',
  },
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '2rem',
  justifyContent: 'space-between',
})

export const InfoGroup = styled('div', {
  display: 'flex',
})

export const UserInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const Body = styled('div', {
  display: 'flex',
  gap: '1.25rem',
})

export const Text = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',

  p: {
    marginTop: '1.25rem',
  },
})

export const HeaderText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const DateAndRate = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '0.75rem',
})

export const Avatar = styled(Image, {
  borderRadius: '$full',
  border: '1px solid $gradientVertical',
  marginRight: '1rem',
})
