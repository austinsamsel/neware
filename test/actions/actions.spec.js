import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

import expect from 'expect'
import * as actions from '../../actions'

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates FETCH_TODOS when fetching todos has been done', () => {
    nock('https://anywhere-32729.firebaseio.com/todos/cool.json')
      .reply(200, {
        payload: {
          todos: ['do something']
        }
      })

    const expectedActions = [
      {
        type: 'FETCH_TODOS',
        payload: { todos: ['do something']  }
      }
    ]
    const store = mockStore({ todos: [] })

    return store.dispatch(actions.fetchTodos('cool'))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})

describe('todo actions', () => {

  it('clear todos should create CLEAR_TODOS action', () => {
    expect(actions.clearTodos()).toEqual({
      type: 'CLEAR_TODOS'
    })
  })

  // it('create todo should create CREATE_TODO action', () => {
  //   expect(actions.createTodo('hi', 'route')).toEqual({
  //     type: 'CREATE_TODO',
  //     text: 'hi'
  //   })
  // })

  it('add channel should create ADD_CHANNEL action', () => {
    expect(actions.addChannel('route')).toEqual({
      type: 'ADD_CHANNEL',
      ch: 'route'
    })
  })
})
