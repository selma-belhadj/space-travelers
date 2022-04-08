import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Header from '../../components/Header';
import Missions from '../../pages/MissionsPage';

describe('Test header component', () => {
  it('header renders correctly', () => {
    const tree = render(
      <Router>
        <Header />
      </Router>,
    );
    expect(tree).toMatchSnapshot();
  });
});

it('Test Missions renders correctly', () => {
  const tree = render(
    <Provider store={store}>
      <Missions />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
