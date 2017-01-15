import {selectResultById} from './results_selectors'

describe('#selectResultById', () => {

  const cxt = {}

  beforeEach(() => {
    cxt.resultPropertyId = 1
  })

  context('when a matching result exists in state', () => {

    beforeEach(() => {
      cxt.resultProperty = {}
      cxt.result = {[cxt.resultPropertyId]: cxt.resultProperty}

      cxt.state = {
        results: cxt.result
      }
    })

    it('returns the result that matches the id', () => {
      const selectedResultProperty = selectResultById(cxt.state, cxt.resultPropertyId)

      expect(selectedResultProperty).to.deep.eq(cxt.result)
    })

  })

  context('when no results match the id', () => {

    beforeEach(() => {
      cxt.state = {
        results: {}
      }
    })

    it('returns undefined', () => {
      expect(selectResultById(cxt.state, cxt.resultPropertyId)).to.be.undefined
    })

  })

})
