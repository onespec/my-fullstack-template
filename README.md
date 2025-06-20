# Full-Stack Template

A modern full-stack web application template with React, TypeScript, Node.js, and Express.

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
- ✅ Authentication route structure
- ✅ JWT and bcrypt setup
- ✅ Jest testing configuration with proper cleanup
- ✅ Professional folder structure
- ✅ Environment variable support

### Frontend
- ✅ Modern React setup with TypeScript
- ✅ Tailwind CSS configuration
- ✅ Responsive starter component
- ✅ Vite development server
- ✅ ESLint configuration

## Next Steps

1. **Implement authentication logic** in `backend/src/controllers/authController.js`
2. **Add database integration** (MongoDB, PostgreSQL, etc.)
3. **Create authentication routes** in `backend/src/routes/auth.js`
4. **Build your frontend components** starting from `frontend/src/App.tsx`
5. **Add API integration** between frontend and backend
6. **Write tests** for your specific functionality

## Environment Variables

Create a `.env` file in the backend directory:
```env
PORT=3000
NODE_ENV=development
JWT_SECRET=your-super-secret-jwt-key-here
```

## License

MIT License - feel free to use this template for any project. 