// src/pages/Profiles.tsx
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
    </div>
  );
};

export default Profiles;
