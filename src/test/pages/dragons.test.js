import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
// import { act } from "react-dom/test-utils";
import store from '../../redux/configureStore';
import Dragon from '../../components/Dragon'

describe('Dragon', () => {
  test('renders Dragon component correctly - when not reserved', () => {
    render(
      <Provider store={store}>
        <Dragon
          key='01'
          dragonId='01'
          dragonName='FireDragon'
          dragonType='capsule'
          dragonDescription='huge fire dragon'
          dragonImageLink='image_link'
          dragonReserved={false}
        />
      </Provider>
    );
    // title to match dragonName
    expect(screen.getByRole('heading').textContent).toBe('FireDragon');
    // image source url to match passed dragonImageLink
    expect(screen.getByRole('img').src).toContain('image_link');
    // dragonType and dragonDescription to be in document
    expect(screen.getByText(/capsule/)).toBeInTheDocument();
    expect(screen.getByText(/huge fire dragon/)).toBeInTheDocument();
    // check button and badge conditional rendering
    expect(screen.getByRole('button').textContent).toBe('Reserve Dragon');
    expect(screen.queryByText(/Reserved/)).toBeNull();
    expect(screen.queryByText(/Cancel Reservation/)).toBeNull();;
  });

  test('renders Dragon component correctly - when reserved', () => {
    render(
      <Provider store={store}>
        <Dragon
          key='02'
          dragonId='02'
          dragonName='Darksmoke'
          dragonType='capsule1'
          dragonDescription='description'
          dragonImageLink='image_link1'
          dragonReserved={true}
        />
      </Provider>
    );
    // title to match dragonName
    expect(screen.getByRole('heading').textContent).toBe('Darksmoke');
    // image source url to match passed dragonImageLink
    expect(screen.getByRole('img').src).toContain('image_link1');
    // dragonType and dragonDescription to be in document
    expect(screen.getByText(/capsule1/)).toBeInTheDocument();
    expect(screen.getByText(/description/)).toBeInTheDocument();
    // check button and badge conditional rendering
    expect(screen.getByRole('button').textContent).toBe('Cancel Reservation');
    expect(screen.queryByText(/Reserved/)).toBeInTheDocument();
    expect(screen.queryByText(/Reserve Dragon/)).toBeNull();

    // const btn = screen.getByRole('button');
    // console.log('before button clicked', btn.innerHTML);
    // act(() => {
    //   btn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    // });

    // console.log('button clicked', btn.innerHTML);
  });

});
