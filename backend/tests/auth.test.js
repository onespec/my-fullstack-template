const request = require('supertest');
const bcrypt = require('bcrypt');
const { app } = require('../src/index');

// Server instance for cleanup
let server;

beforeAll(() => {
  // Start server for testing
  server = app.listen(0); // Use port 0 for random available port
});

afterAll(async () => {
  // Close server after all tests complete
  if (server) {
    await new Promise((resolve) => {
      server.close(resolve);
    });
  }
});

describe('POST /api/auth/register', () => {
  test('should register a user with valid email and password', async () => {
    const userData = {
      email: 'test@example.com',
      password: 'password123'
    };

    const response = await request(app)
      .post('/api/auth/register')
      .send(userData)
      .expect(201);

    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe('User registered successfully');
    expect(response.body.user.email).toBe(userData.email);
    expect(response.body.user).not.toHaveProperty('password');
  });

  test('should return 400 if email is missing', async () => {
    const userData = {
      password: 'password123'
    };

    const response = await request(app)
      .post('/api/auth/register')
      .send(userData)
      .expect(400);

    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe('Email and password are required');
  });

  test('should return 400 if password is missing', async () => {
    const userData = {
      email: 'test@example.com'
    };

    const response = await request(app)
      .post('/api/auth/register')
      .send(userData)
      .expect(400);

    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe('Email and password are required');
  });

  test('should return 400 for invalid email format', async () => {
    const userData = {
      email: 'invalid-email',
      password: 'password123'
    };

    const response = await request(app)
      .post('/api/auth/register')
      .send(userData)
      .expect(400);

    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe('Please provide a valid email address');
  });

  test('should return 400 for password shorter than 6 characters', async () => {
    const userData = {
      email: 'test@example.com',
      password: '12345'
    };

    const response = await request(app)
      .post('/api/auth/register')
      .send(userData)
      .expect(400);

    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe('Password must be at least 6 characters long');
  });
});

describe('POST /api/auth/login', () => {
  test('should login successfully with valid credentials', async () => {
    const loginData = {
      email: 'test@example.com',
      password: 'password123'
    };

    const response = await request(app)
      .post('/api/auth/login')
      .send(loginData)
      .expect(200);

    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe('Login successful');
    expect(response.body.token).toBeDefined();
    expect(response.body.user.email).toBe(loginData.email);
    expect(response.body.user).not.toHaveProperty('password');
  });

  test('should return 401 for invalid email', async () => {
    const loginData = {
      email: 'nonexistent@example.com',
      password: 'password123'
    };

    const response = await request(app)
      .post('/api/auth/login')
      .send(loginData)
      .expect(401);

    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe('Invalid email or password');
    expect(response.body.token).toBeUndefined();
  });

  test('should return 401 for invalid password', async () => {
    const loginData = {
      email: 'test@example.com',
      password: 'wrongpassword'
    };

    const response = await request(app)
      .post('/api/auth/login')
      .send(loginData)
      .expect(401);

    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe('Invalid email or password');
    expect(response.body.token).toBeUndefined();
  });

  test('should return 400 if email is missing', async () => {
    const loginData = {
      password: 'password123'
    };

    const response = await request(app)
      .post('/api/auth/login')
      .send(loginData)
      .expect(400);

    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe('Email and password are required');
  });

  test('should return 400 if password is missing', async () => {
    const loginData = {
      email: 'test@example.com'
    };

    const response = await request(app)
      .post('/api/auth/login')
      .send(loginData)
      .expect(400);

    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe('Email and password are required');
  });

  test('should return 400 for invalid email format', async () => {
    const loginData = {
      email: 'invalid-email',
      password: 'password123'
    };

    const response = await request(app)
      .post('/api/auth/login')
      .send(loginData)
      .expect(400);

    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe('Please provide a valid email address');
  });
}); 