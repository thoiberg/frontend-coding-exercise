import {createReducer} from './redux'
import {random} from 'utils/test'

describe('#createReducer', () => {

  const cxt = {}

  beforeEach(() => {
    cxt.initialState = {}
    cxt.actionType = random.string()
  })

  context('when the handler knows about the action type', () => {

    beforeEach(() => {
      cxt.action = {
        type: cxt.actionType
      }
      cxt.reducerSpy = sinon.spy()
      cxt.handlers = {[cxt.actionType]: cxt.reducerSpy}
      cxt.reducerFunc = createReducer(cxt.initialState, cxt.handlers)

      cxt.state = {}
      cxt.reducerFunc(cxt.state, cxt.action)
    })

    it('calls the handler with the state and action', () => {
      expect(cxt.reducerSpy).to.have.been.calledWith(cxt.state, cxt.action)
    })

  })

  context('when the handler does not about the action type', () => {

    beforeEach(() => {
      cxt.handlers = {}
      cxt.state = {
        [random.string()]: random.string()
      }
      cxt.reducerFunc = createReducer(cxt.initialState, cxt.handlers)
    })

    it('returns the state', () => {
      expect(cxt.reducerFunc(cxt.state, cxt.action)).to.eq(cxt.state)
    })

  })

})