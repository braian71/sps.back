const User = require("../models/user.model");
const { ObjectId } = require("mongoose").Types;
const { hashPassword, verifyPassword } = require('../utils/password.util')

exports.create = async (payload) => {
  const existingUser = await User.findOne({ email: payload.email, deleted: false });

  if (existingUser) {
    throw new Error('El email ya fue registrado.',);
  }

  if (payload.password) {
    payload.password = await hashPassword(payload.password);
  }

  const data = await User.create(payload);
  return data;
};

exports.getAll = async () => {
  const data = await User.find({ deleted: false, });

  return data;
};

exports.getById = async (id) => {
  if (!ObjectId.isValid(id)) {
    throw new Error("ID de usuario no válido");
  }

  const userObjectId = new ObjectId(id);
  const data = await User.findOne({ _id: userObjectId, deleted: false, });

  if (!data) {
    throw new Error("Usuario no encontrado");
  }

  return data;
};


exports.update = async (userId, payload) => {
  if (!ObjectId.isValid(userId)) {
    throw new Error("ID de usuario no válido");
  }

  const userObjectId = new ObjectId(userId);
  let data = await User.updateOne({ _id: userObjectId }, payload);
  data = await User.findOne({ _id: userObjectId });

  return data;
};

exports.remove = async (userId) => {
  if (!ObjectId.isValid(userId)) {
    throw new Error("ID de usuario no válido");
  }

  const userObjectId = new ObjectId(userId);
  const data = await User.updateOne({ _id: userObjectId }, { deleted: true });

  if (!data) {
    throw new Error("Usuario no encontrado");
  }

  return data;
};
