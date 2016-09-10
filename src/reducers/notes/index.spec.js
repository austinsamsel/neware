import notes from './index'

describe('notes reducer', () => {

  it('should handle initial state', () => {
    expect(
      notes(undefined, {})
    ).toEqual([])
  })

  const NotesState = {
    '1' : {
      text: 'test1'
    },
    '2' : {
      text: 'test2'
    }
  }

  it('should handle FETCH_NOTES', () => {
    let state = [];
    expect(
      notes([], {
        type: 'FETCH_NOTES',
        payload: NotesState
      })
    ).toEqual(
      NotesState
    )
  })

  it('should handle CLEAR_NOTES', () => {
    expect(
      notes([], {})
    ).toEqual([])
  })

})
