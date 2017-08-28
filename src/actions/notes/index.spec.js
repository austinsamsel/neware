import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
require('es6-promise').polyfill()
require('isomorphic-fetch')

//import expect from 'expect'
import * as actions from './index'

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates FETCH_NOTES when fetching notes has been done', () => {
    nock('https://anywhere-32729.firebaseio.com')
      .get('/notes/cool')
      .reply(200, {
        payload: {
          notes: ['do something']
        }
      })

    const NotesState = {
      '1': {
        text: 'test1'
      },
      '2': {
        text: 'test2'
      }
    }

    const expectedActions = [
      {
        type: 'FETCH_NOTES',
        payload: { notes: ['do something'] }
      }
    ]
    const store = mockStore({})

    // WIP
    // store.dispatch(actions.fetchNotes('test')).then(() =>{
    //   expect(store.getActions()[0]).toEqual({
    //     type: 'ADD_NOTE',
    //     id: 0,
    //     text: 'Use Redux'
    //   })
    //   return store
    // })

    // return store.dispatch(actions.fetchNotes('cool'))
    //   .then(() => { // return of async actions
    //     expect(store.getActions()).toEqual(expectedActions)
    //   })
  })
})

describe('note actions', () => {
  // Promise test example with mocha and expect
  it('should fetch notes when FETCH_NOTES action', () => {
    function success() {
      return {
        type: 'FETCH_NOTES'
      }
    }

    function fetchNotes() {
      return dispatch => {
        return fetch('https://anywhere-32729.firebaseio.com/notes/sup.json') // Some async action with promise
          .then(() => dispatch(success()))
      }
    }

    const store = mockStore({})

    // Return the promise
    return store.dispatch(fetchNotes()).then(() => {
      expect(store.getActions()[0]).toEqual(success())
    })
  })

  it('clear notes should create CLEAR_NOTES action', () => {
    expect(actions.clearNotes()).toEqual({
      type: 'CLEAR_NOTES'
    })
  })

  // it('fetchNotes should create FETCH_NOTES action', () => {
  //   expect(actions.fetchNotes('test')).toEqual({
  //     type: 'ADD_NOTE',
  //     id: 0,
  //     text: 'Use Redux'
  //   })
  // })

  // it('create note should create CREATE_NOTE action', () => {
  //   expect(actions.createNote('hi', 'route')).toEqual({
  //     type: 'CREATE_NOTE',
  //     text: 'hi'
  //   })
  // })
})
