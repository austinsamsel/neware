export const strip_slash = input => {
  return input.replace(/\//g, '')
}

export const encode = input => {
  return encodeURIComponent(input)
}

export const decode = input => {
  return decodeURIComponent(input)
}
