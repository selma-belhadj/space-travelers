import rocketsReducer, { ROCKETS_FETCHED, TOGGLE_RESERVED } from '../../../redux/rockets/rockets';

describe('Testing Rockets Reducer', () => {
  test('should return initial state', () => {
    expect(rocketsReducer(undefined, {})).toStrictEqual([]);
  });

  test('should return rockets passed in actions', () => {
    const previousState = [];
    const rockets = [{
      id: '0',
      name: 'Test 1',
      description: 'Testing a rocket fetched',
    }];
    const newState = rocketsReducer(previousState, { type: ROCKETS_FETCHED, rockets });

    expect(newState).toStrictEqual(rockets);
  });

  test('should set the reserved property of passed id to true', () => {
    const previousState = [{
      id: '0',
      name: 'Test 1',
      description: 'Testing a rocket fetched',
    }];
    const expectedState = [{
      id: '0',
      name: 'Test 1',
      description: 'Testing a rocket fetched',
      reserved: true,
    }];
    const newState = rocketsReducer(previousState, { type: TOGGLE_RESERVED, id: '0' });

    expect(newState).toStrictEqual(expectedState);
  });

  test('should set the reserved property of passed id to false', () => {
    const previousState = [{
      id: '0',
      name: 'Test 1',
      description: 'Testing a rocket fetched',
      reserved: true,
    }];
    const expectedState = [{
      id: '0',
      name: 'Test 1',
      description: 'Testing a rocket fetched',
      reserved: false,
    }];
    const newState = rocketsReducer(previousState, { type: TOGGLE_RESERVED, id: '0' });

    expect(newState).toStrictEqual(expectedState);
  });
});
