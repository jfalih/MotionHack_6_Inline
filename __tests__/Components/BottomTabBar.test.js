import React from 'react'
import renderer from 'react-test-renderer';
import BottomTabBar from '../../src/components/BottomTabBar/index';
it('renders correctly across screens', () => {
  const tree = renderer.create(<BottomTabBar />).toJSON();
  expect(tree).toMatchSnapshot();
});