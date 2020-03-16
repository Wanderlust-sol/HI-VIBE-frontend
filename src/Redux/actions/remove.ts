const removeFromList = (id: any) => {
  return {
    type: 'REMOVE',
    id,
  };
};

export default removeFromList;
