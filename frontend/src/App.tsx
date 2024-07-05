import React, { Fragment, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useStore } from '@/store';
import Home from '@pages/Home';
import Jobs from '@pages/Jobs';
import Businesses from '@/pages/Businesses';
import Candidates from './pages/Candidates';
import ContactUs from './pages/ContactUs/';
import UserProfile from './pages/UserProfile';
import JobDetails from '@pages/JobDetails';
import BusinessProfile from './pages/BusinessProfile';
import Dashboard from './pages/DashBoard';
import PrivateRoute from '@components/PrivateRoute';
import { Toaster } from 'react-hot-toast';
import MainLayout from './layouts/MainLayout';
import PrivateLayout from './layouts/PrivateLayout';
import About from './pages/About';
import MockProfile from './pages/UserProfile/index.mock.test';
import MockJob from './pages/JobDetails/index.mock.test';
import MockBusiness from './pages/BusinessProfile/index.mock.test';

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
        <Fragment>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='jobs' element={<Jobs />} />
            <Route path='businesses' element={<Businesses />} />
            <Route path='candidates' element={<Candidates />} />
            <Route path='contact-us' element={<ContactUs />} />
            <Route path="about" element={<About />} />

            <Route path="mock-profile" element={<MockProfile />} />
            <Route path="jobs/:id" element={<JobDetails />} />
            <Route path="mock-job" element={<MockJob />} />
            <Route path="business/:id" element={<BusinessProfile />} />
            <Route path="mock-business" element={<MockBusiness />} />
          </Route>
          <Route path="/" element={<PrivateLayout />}>
            <Route path="dashboard" element={(<PrivateRoute><Dashboard /></PrivateRoute>)} />
            <Route path="resume/:id" element={(<PrivateRoute><UserProfile /></PrivateRoute>)} />
          </Route>
        </Fragment>
      </Routes>
    </BrowserRouter>
  );
}

export default App;