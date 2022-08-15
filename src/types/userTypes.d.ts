interface newUser {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

interface loginUser {
  email: string;
  password: string;
}

export { newUser, loginUser };
