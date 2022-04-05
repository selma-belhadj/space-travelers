import SpaceXAPI from '../../api/spaceXAPI';

const MISSIONS_FETCHED = 'MISSIONS_FETCHED';

const fetchAllMissions = () => async (dispatch) => {
  const missions = await SpaceXAPI.fetchAllMissions();
  if (missions) {
    dispatch({ type: MISSIONS_FETCHED, missions });
  }
};

const missionsReducer = (state = [], actions) => {
  switch (actions.type) {
    case MISSIONS_FETCHED:
      return actions.missions;
    default:
      return state;
  }
};

export {
  missionsReducer as default, fetchAllMissions,
};
