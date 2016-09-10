import * as actions from './index'

describe('channel actions', () => {
  it('add channel should create ADD_CHANNEL action', () => {
    expect(actions.addChannel('route')).toEqual({
      type: 'ADD_CHANNEL',
      ch: 'route'
    })
  })
})
