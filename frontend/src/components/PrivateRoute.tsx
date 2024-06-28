import React from 'react';
import { Route, Navigate  } from 'react-router-dom';
import { Observer } from 'mobx-react-lite';
import { useStore } from '../store';

const PrivateRoute: React.FC<any> = (props: any) => {
  const { userStore } = useStore();
  return (
    <Observer>{() => {
      if (userStore.currentUser) return <Route {...props} />;
      return <Navigate to="/" />;
    }}</Observer>
  );
};

export default PrivateRoute;
