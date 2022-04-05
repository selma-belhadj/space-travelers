export const LIST_DRAGONS = 'spaceX/dragons/LIST_ROCKETS';
export const SET_DRAGON_RESERVATION = 'spaceX/dragons/SET_ROCKET_RESERVATION';

export const listDragons = () => async (dispatch) => {
  try {
    const apiDragonsResponse = await fetch(
      'https://api.spacexdata.com/v3/dragons',
    );
    const apiDragons = await apiDragonsResponse.json();

    dispatch({
      type: LIST_DRAGONS,
      payload: apiDragons.map((dragon) => ({
        dragonId: dragon.id,
        dragonName: dragon.name,
        dragonType: dragon.type,
        dragonDescription: dragon.description,
        dragonImage: dragon.flickr_images[0],
        dragonReserved: false,
      })),
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const setDragonReservation = (payload) => ({
  type: SET_DRAGON_RESERVATION,
  payload,
});

// Dragons REDUCER
const dragonsReducer = (state = [], action) => {
  switch (action.type) {
    case LIST_DRAGONS: {
      return [...action.payload];
    }

    case SET_DRAGON_RESERVATION: {
      const updatedState = state.map((dragon) => {
        if (dragon.dragonId !== action.payload.id) {
          return dragon;
        }

        return { ...dragon, dragonReserved: !dragon.dragonReserved };
      });
      return [...updatedState];
    }

    default:
      return state;
  }
};

export default dragonsReducer;
