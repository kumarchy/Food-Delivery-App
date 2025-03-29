import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs';
import validator from "validator";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Helper function to create token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { 
    expiresIn: '1h' // Add expiration
  });
};

// Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await userModel.findOne({ email });
    
    if (!user) {
      return res.status(401).json({ 
        success: false, 
        message: "Invalid credentials" 
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ 
        success: false, 
        message: "Invalid credentials" 
      });
    }
    
    const token = createToken(user._id);
    res.json({ 
      success: true, 
      token,
      userId: user._id 
    });
    
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ 
      success: false, 
      message: "Server error" 
    });
  }
};

// Register user
const registerUser = async (req, res) => {
  const { name, password, email } = req.body;
  
  try {
    // Validation
    if (!validator.isEmail(email)) {
      return res.status(400).json({ 
        success: false, 
        message: "Please enter a valid email" 
      });
    }

    if (password.length < 8) {
      return res.status(400).json({ 
        success: false, 
        message: "Password must be at least 8 characters" 
      });
    }

    // Check if user exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.status(409).json({ 
        success: false, 
        message: "User already exists" 
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword
    });

    const user = await newUser.save();
    const token = createToken(user._id);
    
    res.status(201).json({ 
      success: true, 
      token,
      userId: user._id 
    });

  } catch (error) {
    console.error('Registration Error:', error);
    res.status(500).json({ 
      success: false, 
      message: "Server error" 
    });
  }
};

export { loginUser, registerUser };