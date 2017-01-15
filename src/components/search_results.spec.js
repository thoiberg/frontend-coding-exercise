import React from 'react'
import {shallow} from 'enzyme'
import {random} from 'utils/test'

import {SearchResults} from './search_results'
import {Results} from 'components'

describe('<SearchResults />', () => {

  const cxt = {}

  it('renders a Results component', () => {
    const wrapper = shallow(<SearchResults/>)

    expect(wrapper.find(Results)).to.have.length(1)
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
      const wrapper = shallow(<SearchResults results={cxt.results} />)
      const results = wrapper.find(Results)

      expect(results.prop('results')).to.eq(cxt.results)
    })

    it('renders with the onClickOnResult prop', () => {
      const wrapper = shallow(<SearchResults onClickOnResult={cxt.onClickOnResultSpy} />)
      const results = wrapper.find(Results)

      expect(results.prop('onClick')).to.eq(cxt.onClickOnResultSpy)
    })

  })

})