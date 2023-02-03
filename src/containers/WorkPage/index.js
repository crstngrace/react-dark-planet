import React from 'react';
import { useLocation } from 'react-router';

import SideNav from '../../components/SideNav';
import Work from '../../components/Work';
import Circles from '../../components/Circles';
import './index.scss';

const WorkPage = (props) => {
  const { state } = useLocation();

  // Remove state after getting state for page refresh
  props.removeState();

  return (
    <main id="work">
      <Circles navigate={state?.navigate}>
        <SideNav />
      </Circles>
      <Work />
    </main>
  );
};

export default WorkPage;
