import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const authMiddleWare = async (req, res, next) => {
  try {
    // Check for token in Authorization header (Bearer token)
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ 
        success: false,
        message: 'No token provided or invalid format' 
      });
    }

    const token = authHeader.split(' ')[1];
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    
    // Attach user ID to request object
    req.userId = token_decode.id;
    next();
    
  } catch (error) {
    console.error('Authentication Error:', error);
    return res.status(401).json({ 
      success: false,
      message: error.message || 'Invalid or expired token' 
    });
  }
};

export default authMiddleWare;