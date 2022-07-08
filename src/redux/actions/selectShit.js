export const selectShit = (shitInfo) => {
  return {
    type: "SELECT_SHIT",
    payload: shitInfo,
  };
};
