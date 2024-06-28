import React, { useEffect } from 'react';
import { Observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { Banner } from './Banner';
import { Category } from './Category';


const Home: React.FC = () => {
  const { commonStore } = useStore();

  useEffect(() => {
    async function loadTags() {
      // await commonStore.loadTags();
    }
    loadTags();
  }, [commonStore]);

  return <Observer>{() => {
    const { appName, isLoadingTags, tags, token } = commonStore;
    return (
      <div className="home-page">
        <main>
          <Banner />
          <Category />
        </main>
      </div>
    )
  }}</Observer>
}

export default Home;