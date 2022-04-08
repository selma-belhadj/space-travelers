import SpaceXAPI from '../../api/spaceXAPI';

const ROCKETS_FETCHED = 'ROCKETS_FETCHED';
const TOGGLE_RESERVED = 'TOGGLE_RESERVED';

const fetchAllRockets = () => async (dispatch) => {
  const rockets = await SpaceXAPI.fetchAllRockets();
  if (rockets) {
    dispatch({ type: ROCKETS_FETCHED, rockets });
  }
};

const toggleReservedStatus = ({ id }) => ({
  type: TOGGLE_RESERVED,
  id,
});

const rocketsReducer = (state = [], actions) => {
  switch (actions.type) {
    case ROCKETS_FETCHED:
      return actions.rockets;
    case TOGGLE_RESERVED:
      return state.map((rocket) => {
        if (rocket.id === actions.id) {
          return {
            ...rocket,
            reserved: rocket.reserved ? !rocket.reserved : true,
          };
        }
        return rocket;
      });
    default:
      return state;
  }
};

export {
  rocketsReducer as default,
  fetchAllRockets,
  toggleReservedStatus,
  ROCKETS_FETCHED,
  TOGGLE_RESERVED,
};
