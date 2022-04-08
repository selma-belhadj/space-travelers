import SpaceXAPI from '../../api/spaceXAPI';

const FETCH_MISSIONS = 'FETCH_MISSIONS';
const JOIN_MISSION = 'JOIN_MISSION';
const LEAVE_MISSION = 'LEAVE_MISSION';

const fetchAllMissions = () => async (dispatch) => {
  const missions = await SpaceXAPI.fetchAllMissions();
  if (missions) {
    dispatch({ type: FETCH_MISSIONS, missions });
  }
};

const joinMissionStatus = (id) => ({
  type: JOIN_MISSION,
  id,
});

const leaveMissionStatus = (id) => ({
  type: LEAVE_MISSION,
  id,
});

const missionsReducer = (state = [], actions) => {
  switch (actions.type) {
    case FETCH_MISSIONS:
      return actions.missions;
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.id === actions.id) {
          return {
            ...mission,
            reserved: true,
          };
        }
        return mission;
      });
    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.id === actions.id) {
          return {
            ...mission,
            reserved: false,
          };
        }
        return mission;
      });
    default:
      return state;
  }
};

export {
  missionsReducer as default,
  fetchAllMissions,
  joinMissionStatus,
  leaveMissionStatus,
  FETCH_MISSIONS,
  JOIN_MISSION,
  LEAVE_MISSION,
};
