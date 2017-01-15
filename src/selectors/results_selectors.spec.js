import {selectResults, selectResultById} from './results_selectors'

describe('result selectors', () => {

  const cxt = {}

  describe('#selectResults', () => {

    context('when there are results in state', () => {

      beforeEach(() => {
        cxt.results = {
          1: {},
          2: {}
        }
        cxt.state = {
          results: cxt.results
        }
      })

      it('returns the results', () => {
        expect(selectResults(cxt.state)).to.eq(cxt.results)
      })

    })

    context('when there are no results', () => {

      beforeEach(() => {
        cxt.results = {}
        cxt.state = {results: cxt.results}
      })

      it('returns an empty state', () => {
        expect(selectResults(cxt.state)).to.eq(cxt.results)
      })

    })

  })

  describe('#selectResultById', () => {

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

})