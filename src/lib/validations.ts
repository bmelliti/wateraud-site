export const emailRegex = /\S+@\S+\.\S+/;
export const phoneRegex = /^[\d\s()+-]+$/;

export const validateEmail = (email: string): boolean => {
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  return phoneRegex.test(phone);
};

export const validateMessage = (message: string, minLength = 10): boolean => {
  return message.trim().length >= minLength;
};

export const validateName = (name: string, minLength = 2): boolean => {
  return name.trim().length >= minLength;
};