// @flow
import React from 'react'
import { shallow, mount } from 'enzyme'
import withSizes from '../src/withSizes'

// eslint-disable-next-line
class Dummy extends React.Component {
  render(): React$Node {
    return <span>Testing</span>
  }
}

const EnhancedDummy = withSizes(Dummy)
const expectedReturnValue = { isMobile: false, isTablet: false }

describe('withSizes', () => {
  it('sets the right displayName', () => {
    expect(EnhancedDummy.displayName).toEqual('withSizes(Dummy)')
  })

  it('enhances "Dummy" with the right props', () => {
    const wrapper = shallow(<EnhancedDummy />)

    expect(wrapper.props()).toEqual(expectedReturnValue)
  })

  it('forwards all props', () => {
    const wrapper = shallow(<EnhancedDummy id="test" />)
    expect(wrapper.props()).toEqual({ ...expectedReturnValue, id: 'test' })
    // expect(wrapper.html()).toEqual('<span id="test">Testing</span>')
  })

  it('renders "Dummy" correctly', () => {
    const wrapper = mount(<EnhancedDummy />)
    expect(wrapper.html()).toEqual('<span>Testing</span>')
  })
})
