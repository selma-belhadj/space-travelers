import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { act } from "react-dom/test-utils";
import Dragons from '../../pages/Dragons';
import store from '../../redux/configureStore';
import * as abc from '../../redux/dragons/dragons';

const fakeDragons = [
  {
    dragonId: '0',
    dragonName: 'Dragon 1',
    dragonType: 'capsule',
    dragonDescription: 'Test Dragon 1',
    dragonImage: 'img_url_1',
    dragonReserved: false,
  },
  {
    dragonId: '1',
    dragonName: 'Dragon 2',
    dragonType: 'capsule',
    dragonDescription: 'Test Dragon 2',
    dragonImage: 'img_url_2',
    dragonReserved: true,
  },
];

const mockListDragons = () => {
  jest.spyOn(abc, "listDragons").mockImplementation(() => (dispatch) => {
    dispatch({
      type: abc.LIST_DRAGONS,
      payload: fakeDragons,
    });
  });
};

describe('Testing Dragons Page', () => {
  test('renders list items correctly', () => {
    mockListDragons();
    render(
      <Provider store={store}>
        <Dragons />
      </Provider>,
    );
    const listItems = screen.getAllByRole('listitem');
    // should render 2 list items
    expect(listItems.length).toBe(2);
    // Titles
    expect(screen.getAllByRole('heading')[0].textContent).toBe('Dragon 1');
    expect(screen.getAllByRole('heading')[1].textContent).toBe('Dragon 2');
    // images urls
    expect(screen.getAllByRole('img')[0].src).toContain('img_url_1');
    expect(screen.getAllByRole('img')[1].src).toContain('img_url_2');
    // types and descriptions
    expect(screen.getAllByText(/capsule/).length).toBe(2);
    expect(screen.getByText(/Test Dragon 1/)).toBeInTheDocument();
    expect(screen.getByText(/Test Dragon 2/)).toBeInTheDocument();
    // buttons have correct text content
    expect(screen.getAllByRole('button')[0].textContent).toBe('Reserve Dragon');
    expect(screen.getAllByRole('button')[1].textContent).toBe('Cancel Reservation');
    // badge RESERVED is displayed only on reserved item
    const badge = screen.queryByText(/Reserved/);
    expect(screen.getAllByRole('listitem')[0]).not.toContainElement(badge);
    expect(screen.getAllByRole('listitem')[1]).toContainElement(badge);
  });

  test('buttons change text when clicked', () => {
    mockListDragons();
    render(
      <Provider store={store}>
        <Dragons />
      </Provider>,
    );
    const btn1 = screen.getAllByRole('button')[0];
    const btn2 = screen.getAllByRole('button')[1];
    //before clicking
    expect(btn1.textContent).toBe('Reserve Dragon');
    expect(btn2.textContent).toBe('Cancel Reservation');

    // click event
    act(() => {
      btn1.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      btn2.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(btn1.textContent).toBe('Cancel Reservation');
    expect(btn2.textContent).toBe('Reserve Dragon');
  });
});
