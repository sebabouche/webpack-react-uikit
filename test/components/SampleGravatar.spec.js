import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import md5 from 'md5';

import SampleGravatar from '../../src/components/SampleGravatar';
import SampleAvatar from '../../src/components/SampleAvatar';
import SampleEmail from '../../src/components/SampleEmail';

describe('<SampleGravatar />', () => {
  it('contains an <SampleAvatar/> component', function () {
    const wrapper = mount(<SampleGravatar/>);
    expect(wrapper.find(SampleAvatar)).to.have.length(1);
  });

  it('contains an <SampleEmail/> component', function () {
    const wrapper = mount(<SampleGravatar/>);
    expect(wrapper.find(SampleEmail)).to.have.length(1);
  });

  it('should have an initial email state', function () {
    const wrapper = mount(<SampleGravatar/>);
    expect(wrapper.state().email).to.equal('someone@example.com');
  });

  it('should have an initial src state', function () {
    const wrapper = mount(<SampleGravatar/>);
    expect(wrapper.state().src).to.equal('http://placehold.it/200x200');
  });

  it('should update the src state on clicking fetch', function () {
    const wrapper = mount(<SampleGravatar/>);
    wrapper.setState({ email: 'hello@ifelse.io' });
    wrapper.find('button').simulate('click');
    expect(wrapper.state('email')).to.equal('hello@ifelse.io');
    expect(wrapper.state('src')).to.equal(`http://gravatar.com/avatar/${md5('hello@ifelse.io')}?s=200`);
  });
});
