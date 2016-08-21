import expect from 'expect'
import todos from '../../reducers/todos'

describe('todos reducer', () => {

  it('should handle initial state', () => {
    expect(
      todos(undefined, {})
    ).toEqual([])
  })

  const TodosState = {
    '1' : {
      text: 'test1'
    },
    '2' : {
      text: 'test2'
    }
  }

  it('should handle FETCH_TODOS', () => {
    let state = [];
    expect(
      todos([], {
        type: 'FETCH_TODOS',
        payload: TodosState
      })
    ).toEqual(
      TodosState
    )
  })

  it('should handle CLEAR_TODOS', () => {
    expect(
      todos([], {})
    ).toEqual([])
  })

})
