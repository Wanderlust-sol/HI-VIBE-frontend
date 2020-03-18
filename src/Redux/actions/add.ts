const addToList = (track: any) => {
  return {
    type: 'ADD',
    track,
  };
};

export default addToList;
