export const validateInput = (value) => {
  const maxLength = 500;
  if (value.trim() === "") {
    return "This field cannot be empty.";
  }
  if (value.length > maxLength) {
    return `Input exceeds the maximum length of ${maxLength} characters.`;
  }
  return ""; // No errors
};
