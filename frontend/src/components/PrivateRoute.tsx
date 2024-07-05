import React from 'react';
import { Navigate } from 'react-router-dom';
import { Observer } from 'mobx-react-lite';
import { useStore } from '../store';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { userStore } = useStore();
  return (
    <Observer>{() => {
      if (userStore.currentUser) return children;
      return <Navigate to="/" />;
    }}</Observer>
  );
};


export default PrivateRoute;
