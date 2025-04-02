export const validateInput = (value) => {
  const maxLength = 500;
  if (value.trim() === "") {
    return "This field cannot be empty.";
  }
  if (value.length > maxLength) {
    return `Input exceeds the maximum length of ${maxLength} characters.`;
  }
  if (/[^a-zA-Z0-9\s.,!?]/.test(value)) {
    return "Invalid characters detected. Only letters, numbers, and basic punctuation are allowed.";
  }
  return ""; // No errors
};
