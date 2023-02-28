import React, { Suspense, useState, useEffect } from "react";
import "./App.scss";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import SelectRoute from "./Components/SelectRoute"
import ErrorBoundary from "./error/ErrorBoundary"
import SideNavBar from "./SidebarNavbar/SideNavBar.jsx";
//const Documents=React.lazy(()=>import("Documents/DocumentPage"))





const App = () => {
  const [route, setRoute] = useState("null");
  const history = useHistory();
  const location = useLocation();

  const navigationClicked = (url) => {
    console.log("I am running",url)
    if (url == "/") {
      history.push("/");
      localStorage.setItem("url", url);
      setRoute(url);
    } else {
      setRoute(url);
      localStorage.setItem("url", url);
      history.push("/Vtrac");
    }
  };
  useEffect(() => {
    if (route == "null") {
      const url = localStorage.getItem("url");
      setRoute(url);
    }
  }, []);
  return (
    <>
    <SideNavBar navigationClicked={navigationClicked}/>
      <Switch>
      {/*<Route path="/" strict exact>
            <HomePage/>
        </Route>
  */}
        <Route path="/Vtrac" strict exact>
            <SelectRoute url={route}/>
        </Route>
              </Switch>
    </>
  );
};

export default App;
