import { styled } from '../../../../../stitches.config'

export const Container = styled('aside', {
  display: 'flex',
  flexDirection: 'column',
  borderLeft: '1px solid $gray700',
  width: '19.25rem',
  height: '100%',
  marginTop: '5rem',
})

export const PageTitle = styled('div', {
  marginBottom: '2rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    borderRadius: '$full',
    marginBottom: '1.25rem',
  },
})

export const Seaparator = styled('div', {
  width: '2rem',
  height: '0.25rem',
  borderRadius: '$full',
  background: 'linear-gradient(90deg, #7FD1CC 0%, #9694F5 100%)',
  margin: '0 auto',
  marginBottom: '2rem',
})

export const Info = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2.5rem',
})
