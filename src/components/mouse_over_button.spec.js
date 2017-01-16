import React from 'react'
import {shallow} from 'enzyme'

import {MouseOverButton} from 'components'
import styles from './styles.scss'

describe('<MouseOverButton />', () => {

  const cxt = {}

  beforeEach(() => {
    cxt.onClickSpy = sinon.spy()
  })

  it('renders the children components in the mouse over children div', () => {
    const wrapper = cxt.wrapper = shallow(
      <MouseOverButton onClick={cxt.onClickSpy}>
        <span></span>
      </MouseOverButton>
    )
    const mouseOverChildrenDiv = wrapper.find(`.${styles.mouseOverChildren}`)

    expect(mouseOverChildrenDiv.find('span')).to.have.length(1)
  })

  context('when clicked', () => {

    context('and the onClick prop is set', () => {

      beforeEach(() => {
        cxt.wrapper = shallow(
          <MouseOverButton onClick={cxt.onClickSpy}>
            <span></span>
          </MouseOverButton>
        )

        cxt.wrapper.simulate('click')
      })

      it('calls the onClick function', () => {
        expect(cxt.onClickSpy).to.have.been.called
      })

    })

  })

})