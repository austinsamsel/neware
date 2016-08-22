import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)
require('es6-promise').polyfill();
require('isomorphic-fetch');

import expect from 'expect'
import * as actions from '../../actions'

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates FETCH_TODOS when fetching todos has been done', () => {
    nock('https://anywhere-32729.firebaseio.com')
      .get('/todos/cool')
      .reply(200, {
        payload: {
          todos: ['do something']
        }
      })

    const TodosState = {
      '1' : {
        text: 'test1'
      },
      '2' : {
        text: 'test2'
      }
    }

    const expectedActions = [
      {
        type: 'FETCH_TODOS',
        payload: { todos: ['do something']  }
      }
    ]
    const store = mockStore({})

    store.dispatch(actions.fetchTodos('test')).then(() =>{
      expect(store.getActions()[0]).toEqual({
        type: 'ADD_TODO',
        id: 0,
        text: 'Use Redux'
      })
      return store
    })

    // return store.dispatch(actions.fetchTodos('cool'))
    //   .then(() => { // return of async actions
    //     expect(store.getActions()).toEqual(expectedActions)
    //   })
  })
})

describe('todo actions', () => {

  // Promise test example with mocha and expect
  it('should fetch todos when FETCH_TODOS action', () => {
      function success() {
        return {
          type: 'FETCH_TODOS'
        }
      }

      function fetchTodos () {
        return dispatch => {
          return fetch('https://anywhere-32729.firebaseio.com/todos/sup.json') // Some async action with promise
            .then(() => dispatch(success()))
        };
      }

      const store = mockStore({})

      // Return the promise
      return store.dispatch(fetchTodos())
        .then(() => {
          expect(store.getActions()[0]).toEqual(success())
        })
  })

  it('clear todos should create CLEAR_TODOS action', () => {
    expect(actions.clearTodos()).toEqual({
      type: 'CLEAR_TODOS'
    })
  })

  // it('fetchTodos should create FETCH_TODOS action', () => {
  //   expect(actions.fetchTodos('test')).toEqual({
  //     type: 'ADD_TODO',
  //     id: 0,
  //     text: 'Use Redux'
  //   })
  // })

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
