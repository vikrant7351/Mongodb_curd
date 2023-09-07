const express = require('express');
const User = require('./model/collection'); // Adjust the path as needed

class UserController {
  async createUser(req, res) {
    try {
      const newUser = new User(req.body);
      // const savedUser = await newUser.save({name:"vikrant",surname:"chaudhhary"});
      const savedUser = await newUser.save({}); // dyanmicly
      res.status(201).json(savedUser);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async getUser(req, res) {
    const userId = req.params.id;

    try {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async updateUser(req, res) {
    const userId = req.params.id;

    try {
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        req.body,
        { new: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.json(updatedUser);
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async deleteUser(req, res) {
    const userId = req.params.id;

    try {
      const deletedUser = await User.findByIdAndDelete(userId);

      if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

module.exports = UserController;
