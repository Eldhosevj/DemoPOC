import React, { Suspense } from "react";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";

import { NavLink } from "react-router-dom";
import "./HomePage.css"
const HomePage = (props) => {
  const history = useHistory();

const handleNavigation=(url)=>{
history.push(url)
}     
  
  return <>
  <div className="container">
  <div className="sub-container">
  <div>
<span onClick={()=>handleNavigation("/Vtrack")}>
  <i className="fa fa-bar-chart"></i>
  Vtrack

</span>
  </div>
  <div>
 
<span onClick={()=>handleNavigation("/Shipping")}>
  <i className="fas fa-truck"></i>
  Shipping
</span>
  </div>

<div>
<span onClick={()=>handleNavigation("/SharedData")}>
  <i className="fas fa-user-friends"></i>
  SharedData
</span>
</div>
<div>

<span onClick={()=>handleNavigation("/Documents")}>
  <i className="fa fa-file"></i>
  Documents

</span>
</div>
  </div>
</div>
  </>;
};
export default HomePage;
