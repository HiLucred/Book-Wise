import { styled, keyframes } from '../../../../../stitches.config'

export const Container = styled('div', {
  width: '41.25rem',
  height: '100vh',
  paddingInline: '3rem',
  paddingTop: '4rem',

  position: 'fixed',
  overflow: 'auto',
  top: 0,
  right: 0,
  backgroundColor: '$gray800',

  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',

})

export const BookDetail = styled('div', {
  paddingTop: '1.5rem',
  paddingInline: '2rem',
  paddingBottom: '1rem',

  display: 'flex',
  flexDirection: 'column',

  borderRadius: '$md',
  backgroundColor: '$gray700',
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

export const Comments = styled('div', {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem'
  }
})

export const CommentsHeader = styled('header', {
  marginBottom: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})


