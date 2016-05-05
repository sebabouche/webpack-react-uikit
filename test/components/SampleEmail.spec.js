import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import SampleEmail from '../../src/components/SampleEmail';

describe('SampleEmail', function () {
  it('has an input for the email', function () {
    const wrapper = shallow(<SampleEmail/>);
    expect(wrapper.find('input')).to.have.length(1);
  });

  it('has a button', function () {
    const wrapper = shallow(<SampleEmail/>);
    expect(wrapper.find('button')).to.have.length(1);
  });

  it('has props for handleEmailChange and fetchGravatar', function () {
    const wrapper = shallow(<SampleEmail/>);
    expect(wrapper.props().handleEmailChange).to.be.defined;
    expect(wrapper.props().fetchGravatar).to.be.defined;
  });
});
