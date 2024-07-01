import React, { useEffect } from 'react';
import { Routes , Route, BrowserRouter } from 'react-router-dom';
import { useStore } from '@/store'; // importing module using path alias
import Home from '@pages/Home';
import Jobs from '@pages/Jobs';
import Businesses from '@/pages/Businesses';
import Candidates from './pages/Candidates';
import ContactUs from './pages/ContactUs/';
import Login from '@components/Login';
import Register from '@components/Register';
import PrivateRoute from '@components/PrivateRoute';
import { Toaster } from 'react-hot-toast';
import  MainLayout  from './layouts/MainLayout';
import About from './pages/About';

const App: React.FC = () => {
  const { commonStore, userStore } = useStore()
  useEffect(() => {
    if (commonStore.token) {
      userStore.pullUser()
        .finally(() => commonStore.setAppLoaded())
    }
  })
  return (
    <BrowserRouter>
      <Toaster position='top-right' toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='jobs' element={<Jobs/>} />
          <Route path='businesses' element={<Businesses/>} />
          <Route path='candidates' element={<Candidates/>} />
          <Route path='contact-us' element={<ContactUs/>} />
          <Route path="about" element={<About />} />
          {/* <Route path="faq" element={<Faq />} />
          <Route path="etc" element={<Etc />} /> */}
        </Route>
        {/* <Route path={["/products", "/gallery"]} element={<LayoutTwo />}>
          <Route path="/products" element={<Products />} />
          <Route path="/gallery" element={<Gallery />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
