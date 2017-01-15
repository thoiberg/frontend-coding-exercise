import reducer from './add_saved_result'
import randomstring from 'randomstring'

describe('add saved results reducer', () => {

  const cxt = {}

  context('when a results property matching the id exists', () => {

    beforeEach(() => {
      cxt.savedProperty = {[randomstring.generate()]: randomstring.generate()}
      cxt.state = {
        results: {
          1: cxt.savedProperty
        }
      }
      cxt.action = {
        payload: {
          id: 1
        }
      }

      cxt.newState = reducer(cxt.state, cxt.action)
    })

    it('adds the property to the saved state', () => {
      expect(cxt.newState.saved).to.deep.eq({
        1: cxt.savedProperty
      })
    })

  })

})