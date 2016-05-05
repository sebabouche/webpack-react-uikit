import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Header from '../../src/components/Header';

describe('Header', () => {
  it('shows the logo', () => {
    const component = shallow(<Header />);
    expect(component.find('img.imageTest').length).to.equal(1);
  });
});
