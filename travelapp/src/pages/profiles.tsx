// src/pages/Profiles.tsx
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Profiles: React.FC = () => {
  const [users, setUsers] = useState<{ name: string; email: string }[]>([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    setUsers(storedUsers);
  }, []);

  return (
    <div className="profiles-container">
      <h1>Profiles</h1>
      {users.length === 0 ? (
        <p>No users have signed up yet.</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}
        <div className='button'>
            <Link href='/'>
            <button type='button' className="btn btn-info">Home</button>
            </Link>
        </div>
    </div>
    
  );
};

export default Profiles;
