import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';
import RocketsPage from '../../pages/RocketsPage';
import store from '../../redux/configureStore';
import SpaceXAPI from '../../api/spaceXAPI';

const renderPage = async () => {
  const mockData = [
    {
      id: '0',
      name: 'Test Rocket 1',
      type: 'rocket',
      images: [''],
      description: 'Testing a rocket fetched',
    },
    {
      id: '1',
      name: 'Test Rocket 2',
      type: 'rocket',
      images: [''],
      description: 'Testing a rocket fetched',
    },
  ];

  jest.spyOn(SpaceXAPI, 'fetchAllRockets');
  SpaceXAPI.fetchAllRockets.mockImplementation(() => mockData);

  await act(async () => {
    render(
      <Provider store={store}>
        <RocketsPage />
      </Provider>,
    );
  });
};

describe('Testing Rockets Page', () => {
  test('is page rendered correctly?', async () => {
    await renderPage();
    expect(screen.getByText('Test Rocket 1'));
  });

  test('clicking on reserve rocket button changes the text of button', async () => {
    await renderPage();
    const button = document.querySelector('button');
    expect(button.innerHTML).toBe('Reserve Rocket');

    await act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(button.innerHTML).toBe('Cancel Reservation');
  });
});
