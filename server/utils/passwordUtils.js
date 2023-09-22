import bcrypt from 'bcryptjs' ;

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

const matchPassword = async (password, hash) => {
  return bcrypt.compare(password, hash);
};

export  {
  hashPassword,
  matchPassword,
};
