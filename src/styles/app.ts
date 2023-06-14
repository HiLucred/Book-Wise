import { styled } from '../../stitches.config'

export const Layout = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  width: 1000,
  marginTop: '4.5rem',

  '@bp1': {
    marginInline: '25%',
  },

  '@bp2': {
    marginInline: 'auto',
  },
})
