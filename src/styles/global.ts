import { globalCss } from '../../stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Nunito, sans-serif'
  },

  body: {
    backgroundColor: '$gray800',
    '-webkit-font-smoothing': 'antialiased',
    boxSizing: 'border-box',
  },
})
