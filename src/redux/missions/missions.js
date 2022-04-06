import SpaceXAPI from '../../api/spaceXAPI';

const MISSIONS_FETCHED = 'MISSIONS_FETCHED';
const MISSION_JOINED = 'MISSION_JOINED';

const fetchAllMissions = () => async (dispatch) => {
  const missions = await SpaceXAPI.fetchAllMissions();
  if (missions) {
    dispatch({ type: MISSIONS_FETCHED, missions });
  }
};

const joinMissionStatus = (id) => ({
  type: MISSION_JOINED,
  id,
});

const missionsReducer = (state = [], actions) => {
  switch (actions.type) {
    case MISSIONS_FETCHED:
      return actions.missions;
    case MISSION_JOINED:
      return state.map((mission) => {
        if (mission.id === actions.id) {
          return {
            ...mission,
            reserved: mission.reserved ? !mission.reserved : true,
          };
        }
        return mission;
      });
    default:
      return state;
  }
};

export {
  missionsReducer as default, fetchAllMissions, joinMissionStatus,
};
