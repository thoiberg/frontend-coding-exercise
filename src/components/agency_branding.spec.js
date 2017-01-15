import React from 'react'
import {shallow} from 'enzyme'
import {random} from 'utils/test'

import {AgencyBranding} from 'components'

describe('<AgencyBranding />', () => {

  const cxt = {}

  beforeEach(() => {
    cxt.primaryColor = random.string()
    cxt.brandingColors = {
      primary: cxt.primaryColor
    }
    cxt.logoUrl = random.string()
    cxt.wrapper = shallow(<AgencyBranding brandingColors={cxt.brandingColors} logoUrl={cxt.logoUrl} />)
  })

  it('renders a div with the primary color a the background', () => {
    expect(cxt.wrapper.prop('style')).to.deep.eq({backgroundColor: cxt.primaryColor})
  })

  it('renders an image target with the src as the logoUrl prop', () => {
    const imageTag = cxt.wrapper.find('img')

    expect(imageTag.prop('src')).to.eq(cxt.logoUrl)
  })

})