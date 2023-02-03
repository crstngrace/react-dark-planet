import React from 'react';
import { useLocation } from 'react-router';

import SideNav from '../../components/SideNav';
import Home from '../../components/Home';
import Circles from '../../components/Circles';
import './index.scss';

const HomePage = (props) => {
  const { state } = useLocation();

  // Remove state after getting state for page refresh
  props.removeState();

  return (
    <main id="home">
      <Circles navigate={state?.navigate} />
      <Home />
      <SideNav />
    </main>
  );
};

export default HomePage;
