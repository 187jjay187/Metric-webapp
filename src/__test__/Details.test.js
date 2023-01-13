// imports

import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../pages/Navbar';
import HomePage from '../components/Home';
import store from '../redux/configureStore';

// navbar test
describe('nav components render', () => {
  test('navbar is renders', () => {
    const tree = renderer
      .create(<Router><Provider store={store}><Navbar /></Provider></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  // detailPage test
  test('Details page Renders', () => {
    const tree = renderer
      .create(<Router><Provider store={store}><HomePage /></Provider></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
