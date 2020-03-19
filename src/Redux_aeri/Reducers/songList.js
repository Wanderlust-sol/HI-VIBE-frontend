const initialState = [
  {
    music_id: 145,
    music_name: '까맣게',
    track_number: 1,
    album_image:
      'https://musicmeta-phinf.pstatic.net/album/002/535/2535123.jpg?type=r480Fll&v=20200218131711',
    album_name: '사랑에 연습이 있었다면',
    album_id: 50,
    lyrics: '',
    stream_url: '/stream/145',
    artist_name: ["임재현"],
    artist_id: [],
  }
];

export default function songList(state = initialState, action) {
    switch (action.type) {
        case "ADD_MUSIC":
            return [...state, ...action.payload]
        case "SET_NEW_LIST":
            return action.payload
        case "REMOVE_MUSIC":
            const newState = state.filter(item => item.music_id !== action.payload);
            console.log(newState)
            return newState;
        default:
            return state;
  }
}
