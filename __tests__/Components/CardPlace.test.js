import React from 'react'
import renderer from 'react-test-renderer';
import CardPlace from './../../src/components/CardPlace/index';
it('renders correctly across screens', () => {
  const tree = renderer.create(<CardPlace />).toJSON();
  expect(tree).toMatchSnapshot();
});