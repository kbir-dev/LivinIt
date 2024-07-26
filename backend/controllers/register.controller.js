import User from "../models/user.model.js" 
import bcrypt from "bcrypt"

const registerUser = async (req, res) => {
    try {
      // Step 1: Take input from req.body
      const { name, email, password } = req.body;
  
      // Step 2: Check all inputs are there or not
      if (!name || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
      }
  
      // Step 3: Encrypt the password using bcrypt
      const securedPassword = await bcrypt.hash(password, 10);
  
      // Step 4: Find if there is any user with same email
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'User with this email already exists' });
      }
  
      // Step 5: Create user in database
      const user = await User.create({
        name,
        email,
        password: securedPassword,
      });

      const createdUser = await User.findOne({ email });
  
      // Step 6: If not created user, give error
      if (!createdUser) {
        return res.status(500).json({ error: 'User not created in DB check register controller' });
      }
  
      // Step 7: Say registration successful
      res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };

export {registerUser};