import { useState } from 'react';
import axios from 'axios';
import Input from '../components/Input';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user starts typing
    if (error) {
      setError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // TODO: Connect this to your own user state management or API logic
      // Consider using React Context, Redux, Zustand, or similar for global state
      // Example: dispatch(loginUser(formData)) or setUser(response.data.user)
      const response = await axios.post('http://127.0.0.1:3000/api/auth/login', {
        email: formData.email,
        password: formData.password
      });

      // Handle successful login
      console.log('Login response:', response.data);
      
      // Store JWT token in localStorage
      if (response.data.data?.token) {
        localStorage.setItem('token', response.data.data.token);
        console.log('Token stored in localStorage');
      }

      // TODO: Redirect to dashboard or main app
      console.log('Login successful!');

    } catch (err: any) {
      // Handle login error
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else if (err.message) {
        setError('Network error. Please try again.');
      } else {
        setError('An unexpected error occurred.');
      }
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600">
              Sign in to your account to continue
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Email"
              type="email"
              value={formData.email}
              onChange={(value) => handleInputChange('email', value)}
              placeholder="Enter your email"
              required
              disabled={loading}
            />

            <Input
              label="Password"
              type="password"
              value={formData.password}
              onChange={(value) => handleInputChange('password', value)}
              placeholder="Enter your password"
              required
              disabled={loading}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              This is a private tool for personal use
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 