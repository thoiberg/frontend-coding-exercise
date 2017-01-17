import React from 'react'
import {shallow} from 'enzyme'
import {random} from 'utils/test'

import {MouseOverButton} from 'components'
import styles from './mouse_over_button.scss'

describe('<MouseOverButton />', () => {

  const cxt = {}

  beforeEach(() => {
    cxt.onClickSpy = sinon.spy()
    cxt.buttonText = random.string()
    cxt.wrapper = shallow(
      <MouseOverButton onClick={cxt.onClickSpy} buttonText={cxt.buttonText}>
        <span />
      </MouseOverButton>
    )

  })

  it('renders the children components in the mouse over children div', () => {
    const mouseOverChildrenDiv = cxt.wrapper.find(`.${styles.mouseOverChildren}`)

    expect(mouseOverChildrenDiv.find('span')).to.have.length(1)
  })

  it('renders the button Text in the mouseOverButtonText div', () => {
    const mouseOverButtonTextDiv = cxt.wrapper.find(`.${styles.mouseOverButtonText}`)

    expect(mouseOverButtonTextDiv.text()).to.eq(cxt.buttonText)
  })

  context('when buttonText prop is not supplied', () => {

    beforeEach(() => {
      cxt.wrapper = shallow(
        <MouseOverButton onClick={cxt.onClickSpy}>
          <span />
        </MouseOverButton>
      )

      cxt.mouseOverButtonTextDiv = cxt.wrapper.find(`.${styles.mouseOverButtonText}`)
    })

    it('renders the button with default text', () => {
      expect(cxt.mouseOverButtonTextDiv.text()).to.eq('Click here')
    })

  })

  context('when clicked', () => {

    context('and the onClick prop is set', () => {

      beforeEach(() => {
        cxt.wrapper = shallow(
          <MouseOverButton onClick={cxt.onClickSpy}>
            <span />
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