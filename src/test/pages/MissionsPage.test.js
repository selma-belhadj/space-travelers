import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';
import Missions from '../../pages/MissionsPage';
import store from '../../redux/configureStore';
import SpaceXAPI from '../../api/spaceXAPI';

const renderPage = async () => {
  const mockData = [
    {
      id: '0',
      name: 'Test Mission 1',
      description: 'Testing a mission fetched',
    },
    {
      id: '1',
      name: 'Test Mission 2',
      description: 'Testing a mission fetched',
    },
  ];

  jest.spyOn(SpaceXAPI, 'fetchAllMissoins');
  SpaceXAPI.fetchAllMissions.mockImplementation(() => mockData);

  await act(async () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
  });
};

describe('Testing Missions Page', () => {
  test('is page rendered correctly?', async () => {
    await renderPage();
    expect(screen.getByText('Test Mission 1'));
  });

  test('clicking on join mission button changes the text of button', async () => {
    await renderPage();
    const button = document.querySelector('button');
    expect(button.innerHTML).toBe('Leave Mission');

    await act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(button.innerHTML).toBe('Leave Mission');
  });
});
