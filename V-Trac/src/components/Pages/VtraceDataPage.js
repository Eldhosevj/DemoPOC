import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Logs from '../Logs/Logs';
import Reports from '../Reports/Reports';
import Orders from '../Orders/Orders';
import WelcomePage from '../WelcomeVtracData/WelcomeVtracData';
import SideNavBar from '../SidebarNavbar/SideNavBar.jsx';

function VtracDataPage() {
  const [route, setRoute] = useState('null');

  const counter = useSelector((state) => state);
  const navigationClicked = (url) => {
    setRoute(url);
  };
  const component = (url) => {
    if (url == '/Orders') {
      return <Orders />;
    }
    if (url == '/Logs') {
      return <Logs />;
    }
    if (url == '/Reports') {
      return <Reports />;
    }

    return <WelcomePage />;
  };
  return (
    <>
      <SideNavBar navigationClicked={navigationClicked} />
      {component(route)}
    </>
  );
}
export default VtracDataPage;
