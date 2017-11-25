import { css } from 'glamor'

export const fadeout = css.keyframes('fadeout', {
  '0%': { opacity: 1 },
  '95%': { opacity: 1 },
  '99.999%': { opacity: 0 },
  '100%': { visibility: 'hidden' }
})

export const slidein = css.keyframes('slidein', {
  '0%': { transform: 'scaleX(1)' },
  '100%': { transform: 'scaleX(0)' }
})

// functional css styles
export const s = {
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
  bg_fuchsia: { backgroundColor: 'fuchsia' },

  bold: { fontWeight: 'bold' },

  ff_mono: { fontFamily: 'Consolas,monaco,monospace' },
  ff_body: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif'
  },

  fs__14: { fontSize: '14px' },
  fs__24: { fontSize: '24px' },
  fs__36: { fontSize: '36px' },

  center: { textAlign: 'center' },

  tracked_spaced: { letterSpacing: '0.1rem' },

  m0: { margin: '0' },
  m0auto: { margin: '0 auto' },

  w_100: { width: '100%' },
  mw_100: { maxWidth: '100%' },
  w_auto: { width: 'auto' },
  h_auto: { height: 'auto' },
  h_100: { height: '100%' },

  bn: { border: 'none' },
  br0: { borderRadius: '0' },

  border_blue: { border: 'blue solid 3px' },

  border_box: { boxSizing: 'border-box' },

  df: css({ display: 'flex' }),
  aic: css({ alignItems: 'center' }),
  jcc: { justifyContent: 'center' },

  relative: { position: 'relative' },
  absolute: { position: 'absolute' },

  cursor_default: { cursor: 'default' },

  resize_none: { resize: 'none' }
}
