import { keyframes, styled } from '../../../../../stitches.config'

const triggerCardShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

export const Container = styled('main', {
  animation: `${triggerCardShow} 1s`,
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
})

export const LastReadHeader = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '2.5rem',
  marginBottom: '1rem',
})

export const MostyRecentReviews = styled('div', {
  '> h2': {
    marginTop: '2.5rem',
    marginBottom: '1rem',
  },
})
