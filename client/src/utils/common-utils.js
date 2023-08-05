export const addEllipsis = (text) => {
  if (text.length < 35) {
    return text;
  } else {
    return text.substring(0, 50) + "...";
  }
};
