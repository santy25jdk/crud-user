const User = require('../models/User.models');
const catchError = require('../utils/catchError');

const getAllUsers = catchError(async (req, res) => {
  const users = await User.findAll();
  return res.status(200).json(users);
});

const getUserById = catchError(async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  return res.status(200).json(user);
});

const createUser = catchError(async (req, res) => {
  const { first_name, last_name, email, password, birthday } = req.body;
  const user = await User.create({
    first_name,
    last_name,
    email,
    password,
    birthday,
  });
  return res.status(201).json(user);
});

const updateUser = catchError(async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, password, birthday } = req.body;
  const user = await User.update(
    { first_name, last_name, email, password, birthday },
    { where: { id }, returning: true }
  );
  return res.status(200).json(user[1][0]);
});

const deleteUser = catchError(async (req, res) => {
  const { id } = req.params;
  await User.destroy({ where: { id } });
  return res.sendStatus(204);
});

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
