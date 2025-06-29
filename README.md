# Full-Stack Template

A modern full-stack web application template with React, TypeScript, Node.js, and Express. **This template now includes a fully functional and debugged authentication UI and backend boilerplate, making it a great starting point for apps that need a login system.**

## Tech Stack

### Frontend
- **React 19** - Modern React with hooks
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast development server and building
- **Tailwind CSS** - Utility-first CSS framework

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **bcrypt** - Password hashing
- **jsonwebtoken** - JWT token generation
- **Jest** - Testing framework

## Project Structure

```
├── frontend/           # React + TypeScript + Vite frontend
│   ├── src/
│   ├── package.json
│   └── ...
├── backend/            # Node.js + Express backend
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── models/
│   │   └── utils/
│   ├── tests/
│   ├── package.json
│   └── ...
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone this template**
   ```bash
   git clone <your-repo-url>
   cd <your-project-name>
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

### Development

1. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```
   Server will start at `http://localhost:3000`

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend will start at `http://localhost:5173`

### Testing

**Backend tests**
```bash
cd backend
npm test
```

**Frontend tests**
```bash
cd frontend
npm test
```

## Features Included

### Backend
- ✅ Express server with CORS and JSON middleware
- ✅ Health check endpoint (`/api/health`)
- ✅ **Authentication route structure with login endpoint**
- ✅ **JWT and bcrypt setup for secure authentication**
- ✅ Jest testing configuration with proper cleanup
- ✅ Professional folder structure
- ✅ Environment variable support

### Frontend
- ✅ Modern React setup with TypeScript
- ✅ Tailwind CSS configuration
- ✅ **Beautiful, responsive login page with form validation**
- ✅ **JWT token storage and management**
- ✅ Vite development server
- ✅ ESLint configuration

## Authentication System

This template includes a complete authentication foundation:

- **Backend**: Login endpoint with JWT token generation and password hashing
- **Frontend**: Professional login UI with error handling and loading states
- **Security**: bcrypt password hashing and JWT token-based authentication
- **Ready to extend**: TODO comments guide you to add your own user database and state management

## Next Steps

1. **Implement your user database** - Replace the TODO comments in `backend/src/controllers/authController.js` with your database queries
2. **Add user state management** - Connect the frontend login to your preferred state management solution (Context, Redux, Zustand, etc.)
3. **Add registration functionality** - Implement the registration endpoint in the auth controller
4. **Add protected routes** - Create middleware to protect routes that require authentication
5. **Build your main application** - Start building your app's core features
6. **Write tests** - Add tests for your specific functionality

## Environment Variables

Create a `.env` file in the backend directory:
```env
PORT=3000
NODE_ENV=development
JWT_SECRET=your-super-secret-jwt-key-here
```

## License

MIT License - feel free to use this template for any project. 