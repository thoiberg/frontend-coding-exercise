import React from 'react'
import {shallow} from 'enzyme'
import {random} from 'utils/test'

import {SearchResults} from './search_results'
import {Results, SavedProperties} from 'components'

describe('<SearchResults />', () => {

  const cxt = {}

  beforeEach(() => {
    cxt.saved = {
      [random.integer()]: {},
      [random.integer()]: {}
    }
  })

  it('renders a Results component', () => {
    const wrapper = shallow(<SearchResults saved={cxt.saved} />)

    expect(wrapper.find(Results)).to.have.length(1)
  })

  it('render a SavedProperties component', () => {
    const wrapper = shallow(<SearchResults saved={cxt.saved} />)

    expect(wrapper.find(SavedProperties)).to.have.length(1)
  })

  context('rendering Results', () => {

    beforeEach(() => {
      cxt.results = {
        [random.integer()]: {},
        [random.integer()]: {}
      }
      cxt.onClickOnResultSpy = sinon.spy()
    })

    it('renders with the results prop', () => {
      const wrapper = shallow(<SearchResults results={cxt.results} saved={cxt.saved} />)
      const results = wrapper.find(Results)

      expect(results.prop('results')).to.eq(cxt.results)
    })

    it('renders with the onClickOnResult prop', () => {
      const wrapper = shallow(<SearchResults onClickOnResult={cxt.onClickOnResultSpy} saved={cxt.saved} />)
      const results = wrapper.find(Results)

      expect(results.prop('onClick')).to.eq(cxt.onClickOnResultSpy)
    })

  })

  context('rendering Saved properties', () => {

    beforeEach(() => {
      cxt.wrapper = shallow(<SearchResults saved={cxt.saved} />)
      cxt.savedProperties = cxt.wrapper.find(SavedProperties)
    })

    it('renders with the saved prop', () => {
      expect(cxt.savedProperties.prop('savedProperties')).to.eq(cxt.saved)
    })

  })

})