import React from 'react'
import {shallow} from 'enzyme'
import {random} from 'utils/test'

import {PropertyImage} from 'components'

describe('<PropertyImage />', () => {

  const cxt = {}

  beforeEach(() => {
    cxt.mainImageUrl = random.string()
    cxt.wrapper = shallow(<PropertyImage mainImageUrl={cxt.mainImageUrl}/>)
  })

  it('renders an image with the mainImageUrl as the source', () => {
    expect(cxt.wrapper.prop('src')).to.eq(cxt.mainImageUrl)
  })

})