import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StoreProvider } from './store'
import * as serviceWorker from './serviceWorker';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css'
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StoreProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StoreProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
