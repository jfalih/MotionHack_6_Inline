import React from 'react'
import Button from '../../src/components/Button/index';
import renderer from 'react-test-renderer';
it('renders correctly across screens', () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
});