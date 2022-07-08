export const removeSelectedShit = (shitId) => {
  return {
    type: "REMOVE_SHIT",
    payload: shitId,
  };
};
