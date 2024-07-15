import React, { Fragment, useEffect, useState } from 'react';
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
import ProfileSettings from './pages/ProfileSettings';
import MockProfile from './pages/UserProfile/index.mock.test';
import MockJob from './pages/JobDetails/index.mock.test';
import MockBusiness from './pages/BusinessProfile/index.mock.test';
import MockSaveJobs from './pages/SaveJobs/index.mock.test';
import MockManageJobs from './pages/ManageJobs/index.mock.test';
import MockManageUsers from './pages/ManageUsers/index.mock.test';
import MockAddUsers from './pages/AddUsers/index.mock.test';
import Loader from './common/loader';
import { LoaderProvider } from './stores/LoaderProvider';
import { LoadingOverlay } from '@/components/LoadingOverlay';

const App: React.FC = () => {
  const { commonStore, userStore } = useStore()
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (commonStore.token) {
      userStore.pullUser()
        .finally(() => commonStore.setAppLoaded())
    }
  })

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <LoaderProvider>
      <LoadingOverlay />
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
              <Route path="resume/:id" element={<UserProfile />} />
              <Route path="mock-profile" element={<MockProfile />} />
              <Route path="jobs/:id" element={<JobDetails />} />
              <Route path="mock-job" element={<MockJob />} />
              <Route path="business/:id" element={<BusinessProfile />} />
              <Route path="mock-business" element={<MockBusiness />} />
            </Route>
            <Route path="/" element={<PrivateLayout />}>
              <Route path="dashboard" element={(<PrivateRoute><Dashboard /></PrivateRoute>)} />
              <Route path="users/me" element={(<PrivateRoute><ProfileSettings /></PrivateRoute>)} />
              <Route path="mock-savejobs" element={(<PrivateRoute><MockSaveJobs /></PrivateRoute>)} />
              <Route path="mock-manage-jobs" element={(<PrivateRoute><MockManageJobs /></PrivateRoute>)} />
              <Route path="mock-manage-users" element={(<PrivateRoute><MockManageUsers /></PrivateRoute>)} />
              <Route path="mock-add-users" element={(<PrivateRoute><MockAddUsers /></PrivateRoute>)} />
              {/* <Route path="users/me" element={(<PrivateRoute><UserProfile /></PrivateRoute>)} /> */}
            </Route>
          </Fragment>
        </Routes>
      </BrowserRouter>
    </LoaderProvider>
  );
}

export default App;