import reducer from './add_saved_result'
import {random} from 'utils/test'

describe('add saved results reducer', () => {

  const cxt = {}

  beforeEach(() => {
    cxt.resultId = random.integer({max: 10})
    cxt.action = {
      payload: {
        id: cxt.resultId
      }
    }
  })

  context('when a results property matching the id exists', () => {

    beforeEach(() => {
      cxt.property = {[random.string()]: random.string()}
      cxt.state = {
        results: {
          [cxt.resultId]: cxt.property
        }
      }

      cxt.newState = reducer(cxt.state, cxt.action)
    })

    it('adds the property to the saved state', () => {
      expect(cxt.newState.saved).to.deep.eq({
        [cxt.resultId]: cxt.property
      })
    })

  })

  context('when no results properties matching the id exist', () => {

    beforeEach(() => {
      cxt.state = {
        results: {},
        saved: {
          [random.integer({min: 10})]: {}
        }
      }

      cxt.newState = reducer(cxt.state, cxt.action)
    })

    it('returns the initial state', () => {
      expect(cxt.newState).to.deep.eq(cxt.state)
    })

  })

})