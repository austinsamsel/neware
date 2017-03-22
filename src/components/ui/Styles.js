import { css } from 'glamor'

// functional css styles

export default {

  dimgray: { color: '#666' },
  black: { color: 'black' },
  white: { color: 'white' },
  blue: { color: 'blue' },
  lightseagreen: { color: 'lightseagreen' },
  fuchsia: { color: 'fuchsia' },

  bg_darkgray: { backgroundColor: 'darkgray' },
  bg_snowsmoke: { backgroundColor: '#f7f7f7' },
  bg_whitesmoke: { backgroundColor: '#eee' },
  bg_blue: { backgroundColor: 'blue' },

  bold: { fontWeight: 'bold' },

  ff_mono: { fontFamily:'Consolas,monaco,monospace' },
  ff_body: { fontFamily:'-apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif' },

  fs__14: { fontSize: '14px' },
  fs__24: { fontSize: '24px' },
  fs__36: { fontSize: '36px' },

  tracked_spaced: { letterSpacing:'0.1rem' },

  m0: { margin: '0' },

  w_100: { width: '100%' },
  mw_100: { maxWidth: '100%' },
  w_auto: { width: 'auto' },
  h_auto: { height: 'auto' },

  bn: { border: 'none' },
  br0: { borderRadius: '0' },
  
  border_blue: { border: 'blue solid 3px' },

  border_box: { boxSizing: 'border-box' },

  df : css({ display: 'flex' }),
  aic : css({ alignItems: 'center' }),

  relative: { position: 'relative' },
  absolute: { position: 'absolute' },

  cursor_default : { cursor: 'default' },

  resize_none: { resize:'none' },

}