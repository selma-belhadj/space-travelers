import missionsReducer, { FETCH_MISSIONS, JOIN_MISSION, LEAVE_MISSION } from '../../../redux/missions/missions';

describe('Testing Missions Reducer', () => {
  test('should return initial state', () => {
    expect(missionsReducer(undefined, {})).toStrictEqual([]);
  });

  test('should return missions passed in actions', () => {
    const previousState = [];
    const missions = [{
      id: '0',
      name: 'Test 1',
      description: 'Testing a mission fetched',
    }];
    const newState = missionsReducer(previousState, { type: FETCH_MISSIONS, missions });

    expect(newState).toStrictEqual(missions);
  });

  test('should set the reserved property of passed id to true', () => {
    const previousState = [{
      id: '0',
      name: 'Test 1',
      description: 'Testing a mission fetched',
    }];
    const expectedState = [{
      id: '0',
      name: 'Test 1',
      description: 'Testing a mission fetched',
      reserved: true,
    }];
    const newState = missionsReducer(previousState, { type: JOIN_MISSION, id: '0' });

    expect(newState).toStrictEqual(expectedState);
  });

  test('should set the reserved property of passed id to false', () => {
    const previousState = [{
      id: '0',
      name: 'Test 1',
      description: 'Testing a mission fetched',
      reserved: true,
    }];
    const expectedState = [{
      id: '0',
      name: 'Test 1',
      description: 'Testing a mission fetched',
      reserved: false,
    }];
    const newState = missionsReducer(previousState, { type: LEAVE_MISSION, id: '0' });

    expect(newState).toStrictEqual(expectedState);
  });
});
