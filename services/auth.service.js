const User = require("../models/user.model");
const { verifyPassword } = require('../utils/password.util')

exports.login = async (email, password) => {
  const data = await User.findOne({ email: email });

  if (!data) {
    throw new Error("Usuario no encontrado.");
  }

  if (!verifyPassword(password, data.password)) {
    throw new Error("Contraseña incorrecta.");
  }

  return data;
};
