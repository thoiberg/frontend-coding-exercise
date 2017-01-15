import reducer from './add_saved_result'
import randomstring from 'randomstring'

describe('add saved results reducer', () => {

  const cxt = {}

  beforeEach(() => {
    cxt.action = {
      payload: {
        id: 1
      }
    }
  })

  context('when a results property matching the id exists', () => {

    beforeEach(() => {
      cxt.property = {[randomstring.generate()]: randomstring.generate()}
      cxt.state = {
        results: {
          1: cxt.property
        }
      }

      cxt.newState = reducer(cxt.state, cxt.action)
    })

    it('adds the property to the saved state', () => {
      expect(cxt.newState.saved).to.deep.eq({
        1: cxt.property
      })
    })

  })

  context('when no results properties matching the id exist', () => {

    beforeEach(() => {
      cxt.state = {
        results: {},
        saved: {
          2: {}
        }
      }

      cxt.newState = reducer(cxt.state, cxt.action)
    })

    it('returns the initial state', () => {
      expect(cxt.newState).to.deep.eq(cxt.state)
    })

  })

})