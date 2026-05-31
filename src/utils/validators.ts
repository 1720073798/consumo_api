//correo si es valido
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
//paswor sea mayor a 6
export const isValidPassword = (password: string): boolean => {
  return password.length >= 6;
};

export const passwordsMatch = (password: string, confirm: string): boolean => {
  return password === confirm;
};
