export const validatePassword = (password: string, passwordConfirm: string) => {
  if (password !== passwordConfirm) {
    return "Passwords do not match.";
  }
  return null;
};
