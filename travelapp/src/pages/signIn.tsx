import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const SignIn: React.FC = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailOrUsername);
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Check if a user with the provided email or username exists in local storage
    const user = users.find((u: { email: string | null; username: string | null; password: string }) =>
      (isEmail ? u.email === emailOrUsername : u.username === emailOrUsername)
    );

    if (user && user.password === password) {
      // User exists and password matches
      router.push('/profiles');
    } else {
      // User does not exist or password is incorrect
      setError('User not found or password is incorrect.');
    }
  };

  return (
    <div className="signup-container">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="emailOrUsername">Username or Email:</label>
          <input
            type="text"
            id="emailOrUsername"
            value={emailOrUsername}
            onChange={(e) => setEmailOrUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className="button">
        <Link href="/">
          <button type="button" className="btn btn-info">Back</button>
        </Link>
      </div>
      <div className="button">
        <Link href="/signUp">
          <button type="button" className="btn btn-info">Don't have an account? Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
