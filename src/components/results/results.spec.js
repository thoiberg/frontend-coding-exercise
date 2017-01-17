import React from 'react'
import {shallow} from 'enzyme'
import {random} from 'utils/test'

import Results from './results'
import {Header, MouseOverButton, PropertyCard} from 'components'

describe('<Results />', () => {

  const cxt = {}

  beforeEach(() => {
    cxt.onClickSpy = sinon.spy()
  })

  it('renders a Header', () => {
    const wrapper = shallow(<Results results={{}} />)

    expect(wrapper.find(Header)).to.have.length(1)
  })

  context('rendering the properties', () => {

    beforeEach(() => {
      cxt.results = {
        [random.integer()]: {
          id: random.integer(),
          agency: {},
          mainImage: random.string()
        },
        [random.integer()]: {
          id: random.integer(),
          agency: {},
          mainImage: random.string()
        }
      }

      cxt.wrapper = shallow(<Results results={cxt.results} />)
    })

    it('renders a MouseOverButton for each result', () => {
      expect(cxt.wrapper.find(MouseOverButton)).to.have.length(2)
    })

    it('renders a PropertyCard for each result', () => {
      expect(cxt.wrapper.find(PropertyCard)).to.have.length(2)
    })

  })

  context('rendering a PropertyCard', () => {

    beforeEach(() => {
      cxt.firstResult = {
        id: random.integer(),
        agency: {},
        mainImage: random.string()
      }
      cxt.results = {
        [random.integer()]: cxt.firstResult
      }

      cxt.wrapper = shallow(<Results results={cxt.results} />)
      cxt.propertyCard = cxt.wrapper.find(PropertyCard).first()
    })

    it('renders with the result data as the details prop', () => {
      expect(cxt.propertyCard.prop('details')).to.eq(cxt.firstResult)
    })

  })

  context('rendering a MouseOverButton', () => {

    beforeEach(() => {
      cxt.firstResult = {
        id: random.integer(),
        agency: {},
        mainImage: random.string()
      }
      cxt.results = {
        [random.integer()]: cxt.firstResult
      }

      cxt.wrapper = shallow(<Results results={cxt.results} />)
      cxt.mouseOverButton = cxt.wrapper.find(MouseOverButton).first()
    })

    it('adds the Click to add property text', () => {
      expect(cxt.mouseOverButton.prop('buttonText')).to.eq('Click to add property')
    })

  })

  describe('#handleOnClick', () => {

    beforeEach(() => {
      cxt.resultId = random.integer()
      cxt.wrapper = shallow(<Results onClick={cxt.onClickSpy} results={{}} />)
      cxt.handleOnClickFunc = cxt.wrapper.instance().handleOnClick(cxt.resultId)()
    })

    it('returns a function that calls the onClick prop', () => {

      expect(cxt.onClickSpy).to.have.been.calledWith(cxt.resultId)
    })

  })

})