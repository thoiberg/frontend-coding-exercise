import React from 'react'
import {shallow} from 'enzyme'
import {random} from 'utils/test'

import Results from './results'
import {Header, PropertyCard} from 'components'

describe('<Results />', () => {

  const cxt = {}

  beforeEach(() => {
    cxt.onClickSpy = sinon.spy()
  })

  it('renders a Header', () => {
    const wrapper = shallow(<Results />)

    expect(wrapper.find(Header)).to.have.length(1)
  })

  it('renders a PropertyCard for each result', () => {
    const results = {
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
    const wrapper = shallow(<Results results={results} onClick={cxt.onClickSpy} />)

    expect(wrapper.find(PropertyCard)).to.have.length(2)
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

      cxt.wrapper = shallow(<Results results={cxt.results} onClick={cxt.onClickSpy} />)
      cxt.propertyCard = cxt.wrapper.find(PropertyCard).first()
    })

    it('renders with the result data as the details prop', () => {
      expect(cxt.propertyCard.prop('details')).to.eq(cxt.firstResult)
    })

    it('renders with the onClickOnResult as the onClick prop', () => {
      expect(cxt.propertyCard.prop('onClick')).to.eq(cxt.onClickSpy)
    })
  })

})