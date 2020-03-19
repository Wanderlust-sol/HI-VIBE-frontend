export const addMusic = (song) =>{
    return {
        type: "ADD_MUSIC",
        payload: song
    }
}
export const removeMusic = (id) =>{
  return{
    type: "REMOVE_MUSIC",
    payload: id
  }
}
export const setNewList = (songList) => {
  return {
    type: 'SET_NEW_LIST',
    payload: songList,
  };
};

