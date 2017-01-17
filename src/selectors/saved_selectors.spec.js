import * as selectors from './saved_selectors'

describe('saved selectors', () => {

  const cxt = {}

  describe('#selectSaved', () => {

    context('when there are saved properties', () => {

      beforeEach(() => {
        cxt.saved = {
          1: {},
          2: {}
        }
        cxt.state = {
          properties: {
            saved: cxt.saved
          }
        }

        cxt.savedProperties = selectors.selectSaved(cxt.state)
      })

      it('returns the saved properties', () => {
        expect(cxt.savedProperties).to.eq(cxt.saved)
      })

    })

    context('when there are no saved properties', () => {

      beforeEach(() => {
        cxt.saved = {}
        cxt.state = {
          properties: {
            saved: cxt.saved
          }
        }

        cxt.savedProperties = selectors.selectSaved(cxt.state)
      })

      it('returns an empty object', () => {
        expect(cxt.savedProperties).to.eq(cxt.saved)
      })

    })

  })

})