import React from 'react'
import {shallow} from 'enzyme'
import {random} from 'utils/test'

import PropertyPriceBar from './property_price_bar'

describe('<PropertyPriceBar />', () => {

  const cxt = {}

  beforeEach(() => {
    cxt.price = random.string()
    cxt.wrapper = shallow(<PropertyPriceBar price={cxt.price} />)
  })

  it('renders a div with the price prop in it', () => {
    expect(cxt.wrapper.text()).to.eq(cxt.price)
  })

})