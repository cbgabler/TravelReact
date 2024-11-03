import Link from 'next/link'
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const SignIn: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser = { name, email };
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    router.push('/profiles');
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>

      <div className='button'>
            <Link href='/'>
            <button type='button' className="btn btn-info">Home</button>
            </Link>
        </div>
        <div className='button'>
            <Link href='/signUp'>
            <button type='button' className="btn btn-info">Dont have an account? Sign Up</button>
            </Link>
        </div>
    </div>
  );
};

export default SignIn;
