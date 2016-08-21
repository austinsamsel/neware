import expect from 'expect'
import addChannel from '../../reducers/addChannel'

describe('channels reducer', () => {

  it('should handle initial state', () => {
    expect(
      addChannel(undefined, { ch: '' })
    ).toEqual({ ch: '' })
  })

  it('should handle ADD_CHANNEL', () => {
    expect(
      addChannel({ ch: '' }, {
        type: 'ADD_CHANNEL',
        ch: 'test1',
      })
    ).toEqual(
      {
        ch: 'test1',
      }
    )
  })
})
