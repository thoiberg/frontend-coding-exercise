import React from 'react'
import {shallow} from 'enzyme'
import {random} from 'utils/test'

import Header from './header'

describe('<Header />', () => {

  const cxt = {}

  beforeEach(() => {
    cxt.title = random.string()
    cxt.wrapper = shallow(<Header title={cxt.title} />)
  })

  it('renders a header tag', () => {
    expect(cxt.wrapper.find('h1')).to.have.length(1)
  })

  it('renders the title prop within the header tag', () => {
    expect(cxt.wrapper.find('h1').text()).to.eq(cxt.title)
  })

})