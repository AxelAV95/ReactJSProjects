import React from 'react';
import useAuth from '../hooks/useAuth';

const Header = () => {
  const { user, isAuthenticated } = useAuth();

  return (
    <header>
      <h1>Mi Aplicación</h1>
      {isAuthenticated && <p>Bienvenido, {user.name}</p>}
    </header>
  );
};

export default Header;