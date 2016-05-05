import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import SampleAvatar from '../../src/components/SampleAvatar';

describe('SampleAvatar', () => {
  it('has an image to display the gravatar', () => {
    const wrapper = shallow(<SampleAvatar />);
    expect(wrapper.find("img")).to.have.length(1);
  });

  it('should have props for email and src', () => {
    const wrapper = shallow(<SampleAvatar />);
    expect(wrapper.props().email).to.be.defined;
    expect(wrapper.props().src).to.be.defined;
  });
});
