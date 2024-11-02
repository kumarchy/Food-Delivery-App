# Food Delivery App
This is a full-stack food delivery application built with the MERN (MongoDB, Express.js, React, Node.js) stack. This app allows users to browse a variety of dishes, add items to their cart, place orders, and manage their profiles. For admins, there are features to manage food items, handle orders, and monitor inventory. This README provides an overview of the application, its features, installation steps, and usage instructions.
## Features
### User Features
- Explore Menu: Browse a rich variety of dishes by category.
- Cart Management: Add and remove items, view cart total, and proceed to checkout.
- Place Orders: Input delivery information and finalize the order.
- Authentication: Register and login functionality with secure password hashing and JWT authentication.
### Admin Features
- Admin Dashboard: Admin-exclusive access to manage food items, orders, and inventory.
- Admin Dashboard: Admin-exclusive access to manage food items, orders, and inventory.
- Order Management: View, process, and update order status.
- User Management: Monitor and manage user information and activity.
### Additional Components
- Navbar and Sidebar: Navigate easily across pages with a visually appealing layout.
- Responsive Design: Optimized for both desktop and mobile platforms
- Persistent User Sessions: User tokens stored in localStorage for session management.
## 📂 Project Structure
    
     Tomato-Food-Delivery-App/
     ├── backend/
     │   ├── config/
     │   │   └── db.js         # MongoDB connection setup
     │   ├── controllers/      # Controller logic for routes
     │   ├── middleware/
     │   │   └── auth.js       # JWT-based authentication middleware
     │   ├── models/           # Mongoose schemas for database
     │   ├── routes/           # Express routes for APIs
     │   ├── uploads/          # Image storage for food items
     │   └── server.js         # Entry point of backend server
     │
     └── frontend/
     ├── src/
     │   ├── assets/           # Icons, images, and static assets
     │   ├── components/       # Reusable components (Header, Footer)
     │   ├── context/          # React context for global state
     │   ├── pages/            # Pages (Home, Cart, Orders, etc.)
     │   ├── App.js            # Main application component
     │   └── index.js          # Entry point of frontend

## Built With
- Frontend: React.js, Axios, CSS, React Router DOM, React Context API
- Backend: Node.js, Express.js, Mongoose, JWT, Bcrypt, Multer (for image uploads)
- Database: MongoDB
- Payment Integration: Stripe
- Other Packages: dotenv, cors, validator, body-parser
## Installation and Setup
### Prerequisites
- Node.js and npm
- MongoDB database (local or MongoDB Atlas)
### Installation
1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/tomato-food-delivery.git
   cd tomato-food-delivery
2. Backend Setup
  - Navigate to the backend folder:
    ```bash
    cd backend
  - Install dependencies:
    ```bash
    npm install
  - Create a .env file in backend with the following variables:
    ```bash
    PORT=4000
    JWT_SECRET=your_jwt_secret
    MONGO_URI=your_mongodb_connection_string
    STRIPE_SECRET_KEY=your_stripe_secret_key
  - Start the backend server:
    ```bash
    npm run server
3. Frontend Setup
  - Install dependencies
    ```bash
    npm install
  - Start the React development server:
    ```bash
    npm start
4. Access the Application
  - Frontend: http://localhost:3000
  - Backend API: http://localhost:4000
## Workflow
1. User Registration and Login
- Users can sign up and log in, with JWT tokens stored in localStorage for session management.
2. Browsing and Ordering
- Browse the menu, filter items by category, and view item details.
- Add items to the cart, view cart totals, and proceed to place an order.
3. Order Management
- Once the order is placed, users can view order status.
- Admins can access a dashboard to view and manage all orders.
4. Admin Panel
- Admins can add new items to the menu, view existing items, and delete them as needed.
- Manage user orders, including updating their status from "Processing" to "Completed."
##  Authentication and Authorization
- JWT Authentication: Tokens are generated during login and verified for each request to protected routes.
- Authorization: Admin routes are protected, ensuring only authorized users can perform specific actions.
## Screenshots
![image](https://github.com/kumarchy/Food-Delivery-App/blob/main/Screenshot%202024-11-02%20214051.png)

## Contributing
- Fork the project.
- Create your feature branch (git checkout -b feature/AmazingFeature).
- Commit your changes (git commit -m 'Add AmazingFeature').
- Push to the branch (git push origin feature/AmazingFeature).
- Open a Pull Request.
