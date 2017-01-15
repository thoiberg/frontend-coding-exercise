import React from 'react'
import {shallow} from 'enzyme'
import {random} from 'utils/test'

import SavedProperties from './saved_properties'
import {Header, PropertyCard} from 'components'

describe('<SavedProperties />', () => {

  const cxt = {}

  beforeEach(() => {
    cxt.savedProperties = {
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
    cxt.wrapper = shallow(<SavedProperties savedProperties={cxt.savedProperties} />)
  })

  it('renders a Header', () => {
    expect(cxt.wrapper.find(Header)).to.have.length(1)
  })

  it('renders the Header with the Saved Properties title', () => {
    const headerComponent = cxt.wrapper.find(Header)

    expect(headerComponent.prop('title')).to.eq('Saved Properties')
  })

  it('renders a Property Card for each saved property', () => {
    expect(cxt.wrapper.find(PropertyCard)).to.have.length(2)
  })

})