const initialState = [
  {
    id: 1,
    name: 'WANNABE',
    artist_name: 'ITZY(있지)',
    album_image:
      'https://musicmeta-phinf.pstatic.net/album/004/480/4480594.jpg?type=r100Fll&v=20200309220857',
    src: 'Audio/몽니 - 소년이 어른이 되어.mp3',
  },
  {
    id: 2,
    name: '달라달라',
    artist_name: 'ITZY(있지)',
    album_image:
      'https://musicmeta-phinf.pstatic.net/album/002/841/2841538.jpg?type=r100Fll&v=20200218132210',
    src: 'Audio/ES_Insane - Loving Caliber.mp3',
  },
  {
    id: 3,
    name: 'CHERRY',
    artist_name: 'ITZY(있지)',
    album_image:
      'https://musicmeta-phinf.pstatic.net/album/003/132/3132878.jpg?type=r100Fll&v=20200218131711',
    src: 'Audio/daybreak.mp3',
  },
  {
    id: 4,
    name: "THAT'S NO NO",
    artist_name: 'ITZY(있지)',
    album_image:
      'https://musicmeta-phinf.pstatic.net/album/004/480/4480594.jpg?type=r100Fll&v=20200309220857',
    src: 'Audio/ES_Insane - Loving Caliber.mp3',
  },
  {
    id: 5,
    name: "IT'z SUMMER",
    artist_name: 'ITZY(있지)',
    album_image:
      'https://musicmeta-phinf.pstatic.net/album/003/132/3132878.jpg?type=r100Fll&v=20200218131711',
    src: 'Audio/ES_Future Vibes - Qeeo.mp3',
  },
  {
    id: 6,
    name: 'WANT IT?',
    artist_name: 'ITZY(있지)',
    album_image:
      'https://musicmeta-phinf.pstatic.net/album/002/841/2841538.jpg?type=r100Fll&v=20200218132210',
    src: 'Audio/ES_Insane - Loving Caliber.mp3',
  },
];

export default function songList(state = initialState, action) {
    switch (action.type) {
        case "ADD_MUSIC":
            return [...state, action.payload]
        case "SET_NEW_LIST":
            return action.payload
        case "REMOVE_MUSIC":
            const newState = state.filter( item => item.id !== action.payload );
            return newState;
        default:
            return state;
  }
}
