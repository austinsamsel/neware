import expect from 'expect'
import * as actions from '../../actions'

describe('todo actions', () => {
  it('fetch todos should create FETCH_TODOS action', () => {
    expect(actions.fetchTodos('another')).toEqual({
      type: 'FETCH_TODOS',
      payload: ''
    })
  })

  it('clear todos should create CLEAR_TODOS action', () => {
    expect(actions.clearTodos()).toEqual({
      type: 'CLEAR_TODOS'
    })
  })

  it('create todo should create CREATE_TODO action', () => {
    expect(actions.createTodo('hi', 'route')).toEqual({
      type: 'CREATE_TODO',
      text: 'hi'
    })
  })

  it('add channel should create ADD_CHANNEL action', () => {
    expect(actions.addChannel('route')).toEqual({
      type: 'ADD_CHANNEL',
      ch: 'route'
    })
  })
})
