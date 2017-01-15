import {addSavedResult} from './add_saved_result'
import {ADD_SAVED_RESULT} from './actions'
import {random} from 'utils/test'

describe('action add saved results', () => {

  const cxt = {}

  describe('#addSavedResult', () => {

    beforeEach(() => {
      cxt.resultPropertyId = random.integer()
      cxt.action = addSavedResult(cxt.resultPropertyId)
    })

    it('creates an ADD_SAVED_RESULT action', () => {
      expect(cxt.action.type).to.eq(ADD_SAVED_RESULT)
    })

    it('adds the id to the payload', () => {
      expect(cxt.action.payload).to.deep.eq({
        id: cxt.resultPropertyId
      })
    })

  })

})