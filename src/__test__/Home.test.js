// import
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../pages/Navbar';
import store from '../redux/configureStore';
import HomePage from '../components/Home';

// test homepage renders
describe('navbar components render', () => {
  test('render navbar components', () => {
    const tree = renderer
      .create(<Router><Provider store={store}><Navbar /></Provider></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('render home page', () => {
    const tree = renderer
      .create(<Router><Provider store={store}><HomePage /></Provider></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
