import moment from 'moment'

// utilities
export const strip_slash = input => {
  return input.replace(/\//g, '')
}

export const encode = input => {
  return encodeURIComponent(input)
}

export const decode = input => {
  return decodeURIComponent(input)
}

// helpers
export const undo_timer = created_at => {
  const second = 1000
  const undo_cutoff = created_at + 10 * 1000
  const current_time = moment(new Date()).valueOf()
  const diff_time = undo_cutoff - current_time
  const in_seconds = diff_time / second
  return in_seconds
}
