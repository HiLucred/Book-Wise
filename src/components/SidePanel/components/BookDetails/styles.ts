import { styled } from '../../../../../stitches.config'

export const Container = styled('div', {
  paddingTop: '1.5rem',
  paddingInline: '2rem',
  paddingBottom: '1rem',

  display: 'flex',
  flexDirection: 'column',

  borderRadius: '$md',
  backgroundColor: '$gray700',

  svg: {
    color: 'green100',
  },
})

export const BookBox = styled('div', {
  display: 'flex',
  gap: '2rem',
  paddingBottom: '2.5rem',
  borderBottom: '1px solid $gray600',
})

export const Info = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const About = styled('div', {
  width: '100%',
  paddingTop: '1.5rem',
  paddingBottom: '1.5rem',

  display: 'flex',
  alignItems: 'center',
  gap: '3.5rem',

  svg: {
    color: '$green100',
  },
})

export const CategoryBox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
})

export const Pages = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
})
