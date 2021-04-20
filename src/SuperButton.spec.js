import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import AwesomeButton from './SuperButton';

configure({ adapter: new Adapter() });

// With shallow() only component renders, not children. Learn more: https://gist.github.com/fokusferit/e4558d384e4e9cab95d04e5f35d4f913
describe('Awesome button component', () => {
  it("Button text is 'I'm an awesome button'", () => {
    const wrapper = shallow(<AwesomeButton />);
    expect(wrapper.find('button').text()).toEqual("I'm an awesome button");
  });
  it("Button text is 'I'm not a super awesome button?' when clicked", () => {
    const wrapper = shallow(<AwesomeButton />);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(wrapper.find('button').text()).toEqual("I'm not a super awesome button?");
  });
});
