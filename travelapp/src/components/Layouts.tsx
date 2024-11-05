import React from 'react';
import Navbar from './Navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="max-w-2xl mx-auto p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;
