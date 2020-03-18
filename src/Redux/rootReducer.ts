const initialState = {
  playlist: [
    {
      id: 0,
      title: 'Michal Jackson',
      artist: 'Black or White',
    },
    {
      id: 1,
      title: 'Michal Jackson',
      artist: 'Bad',
    },
  ],
};

const rootReducer = (state = initialState, action: any) => {
  const newTrack = action.track;
  switch (action.type) {
    case 'ADD':
      // only add once
      if (
        state.playlist.filter((track) => action.track.id === track.id).length >
        0
      ) {
        return state; // do nothing --> already in list
      }

      return {
        ...state,
        playlist: [
          ...state.playlist,
          {
            id: state.playlist.length,
            ...newTrack,
          },
        ],
      };
    case 'REMOVE':
      console.log('remove', action.id);
      return {
        ...state,
        playlist: state.playlist.filter((track) => track.id !== action.id),
      };
    default:
      return state;
  }
};

export default rootReducer;
