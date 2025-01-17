import express from 'express';
import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const loginUser = async(req,res) => {
  console.log("Yayy")
        const { email, password } = req.body;
      
        try {
          // Find the user by email
          console.log(email)
          const user = await User.findOne({ email });
      
          if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
          }
      
          // Check if the password matches
          const isMatch = await user.matchPassword(password);
      
          if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
          }
      
          // Generate JWT tokens
          const accessToken = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
          const refreshToken = jwt.sign({ userId: user._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
      
          // Send secure cookies
          res.cookie('accessToken', accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 15 * 60 * 1000 // 15 minutes
          });
      
          res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
          });
      console.log("I am here 2")
          // Send response
          res.status(200).json({ message: 'Logged in successfully' });
        } catch (error) {
          res.status(500).json({ message: 'Server error' });
        }
};

export {loginUser};