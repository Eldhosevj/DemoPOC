import React, { Suspense } from "react";
import { NavLink } from "react-router-dom";

const HomePage = (props) => {
     
  
  return <>
  <div>
  <NavLink to="/Vtrack" end>
  Vtrack
</NavLink>
  </div>
  <div>
  <NavLink to="/Shipping" end>
Shipping
</NavLink>
  </div>

<div>
<NavLink to="/SharedData" end>
SharedData
</NavLink>
</div>
<div>
<NavLink to="/Documents" end>
Documents
</NavLink>
</div>
  
  </>;
};
export default HomePage;
