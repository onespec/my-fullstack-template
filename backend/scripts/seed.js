const bcrypt = require('bcrypt');

// User credentials
const userEmail = 'admin@email.com';
const plaintextPassword = 'supersecretpassword123';

// Hash the password
const saltRounds = 10;
bcrypt.hash(plaintextPassword, saltRounds, (err, hash) => {
  if (err) {
    console.error('Error hashing password:', err);
    return;
  }

  console.log('=== User Account Seed Data ===');
  console.log('Email:', userEmail);
  console.log('Plaintext Password:', plaintextPassword);
  console.log('Hashed Password:', hash);
  console.log('==============================');
  
  // Verify the hash works (optional test)
  bcrypt.compare(plaintextPassword, hash, (err, result) => {
    if (err) {
      console.error('Error verifying password:', err);
      return;
    }
    console.log('Password verification test:', result ? 'PASSED' : 'FAILED');
  });
}); 