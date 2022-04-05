import SpaceXAPI from '../../api/spaceXAPI';

const ROCKETS_FETCHED = 'ROCKETS_FETCHED';

const fetchAllRockets = () => async (dispatch) => {
  const rockets = await SpaceXAPI.fetchAllRockets();
  if (rockets) {
    dispatch({ type: ROCKETS_FETCHED, rockets });
  }
  // TODO Show API Error
};

const rocketsReducer = (state = [], actions) => {
  switch (actions.type) {
    case ROCKETS_FETCHED:
      return actions.rockets;
    default:
      return state;
  }
};

export default rocketsReducer;
