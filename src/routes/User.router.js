const express = require('express');
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/User.controllers');

const UserRouter = express.Router();

UserRouter.route('/').get(getAllUsers).post(createUser);
UserRouter.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

module.exports = UserRouter;
