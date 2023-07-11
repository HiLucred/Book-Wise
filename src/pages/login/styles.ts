import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  maxWidth: 1100,
  width: '98vw',
  height: '99vh',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const Hero = styled('div', {
  width: '37.375rem',
  maxHeight: 912,
  height: '90%',
  background: `$gray700 url('/preview-image.png') no-repeat center`,
  borderRadius: '$md',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const LoginContainer = styled('div', {
  p: {
    marginBottom: '$10',
  },
})

export const Button = styled('button', {
  width: '23.25rem',
  marginBottom: '$4',
  cursor: 'pointer',
  backgroundColor: '$gray600',
  padding: '$5 $6',
  border: 'none',
  borderRadius: 8,
  fontSize: '$lg',
  fontWeight: '$bold',
  color: '$gray200',
  display: 'flex',
  alignItems: 'center',
  gap: '$5',
})
