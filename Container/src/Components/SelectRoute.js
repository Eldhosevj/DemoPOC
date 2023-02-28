import React, { Suspense } from "react";
const Orders = React.lazy(() => import("Vtrac/Orders"));
const Reports = React.lazy(() => import("Vtrac/Reports"));
const Logs = React.lazy(() => import("Vtrac/Logs"));
const View = React.lazy(() => import("Documents/View"));
const Customer = React.lazy(() => import("SharedData/Customer"));
const RecievedShipment = React.lazy(() => import("Shipping/RecievedShipment"));
const ViewShipment = React.lazy(() => import("Shipping/ViewShipment"))
import ErrorBoundaryVtrackOrders from "../error/Vtrack/ErrorBoundaryVtrackOrders"
import ErrorBoundaryVtrackLogs from "../error/Vtrack/ErrorBoundaryVtrackLogs"
import ErrorBoundaryVtrackReports from "../error/Vtrack/ErrorBoundaryVtrackReports"
import ErrorBoundaryCustomers from "../error/SharedData/ErrorBoundaryCustomers"
import ErrorBoundaryViewShipment from "../error/Shipping/ErrorBoundaryViewShipment"
import ErrorBoundaryRecievedShipment from "../error/Shipping/ErrorBoundaryRecievedShipment"
import ErrorBoundaryDocumentView from "../error/Document/ErrorBoundaryDocumentView"
import ErrorBoundary from "../error/ErrorBoundary";
const SelectRoute = (props) => {
  const url = props.url;
  const component = () => {
    if (url == "/Orders") {
      return (
        <Suspense fallback={null}>
           <ErrorBoundaryVtrackOrders  fallback={<h2>Unable to load Orders</h2>}>

          <Orders />
          </ErrorBoundaryVtrackOrders>
        </Suspense>
      );
    }
    if (url == "/Reports") {
      return (
        <Suspense fallback={null}>
           <ErrorBoundaryVtrackReports  fallback={<h2>Unable to load Reports</h2>}>
          <Reports />
          </ErrorBoundaryVtrackReports>
        </Suspense>
      );
    }
    if (url == "/Logs") {
      return (
        <Suspense fallback={null}>
           <ErrorBoundaryVtrackLogs  fallback={<h2>Unable to load Logs</h2>}>
          <Logs />
          </ErrorBoundaryVtrackLogs>
        </Suspense>
       
      );
    }
    if (url == "/Customer") {
      return (
        <Suspense fallback={null}>
           <ErrorBoundaryCustomers  fallback={<h2>Unable to load Customer</h2>}>
          <Customer />
          </ErrorBoundaryCustomers>
        </Suspense>
      );
    }
    if (url == "/RecievedShipment") {
      return (
        <Suspense fallback={null}>
           <ErrorBoundaryRecievedShipment  fallback={<h2>Unable to load RecievedShipment</h2>}>
          <RecievedShipment />
          </ErrorBoundaryRecievedShipment>
        </Suspense>
      );
    }
    if (url == "/ViewShipment") {
      return (
        <Suspense fallback={null}>
        <ErrorBoundaryViewShipment  fallback={<h2>Unable to load view shipment</h2>}>

          <ViewShipment />
          </ErrorBoundaryViewShipment>

        </Suspense>
      );
    }
    if (url == "/View") {
      return (
        <Suspense fallback={null}>
           <ErrorBoundaryDocumentView  fallback={<h2>Unable to load Documents</h2>}>
          <View />
          </ErrorBoundaryDocumentView>
        </Suspense>
      );
    }
  };


  return( <div>
  
  {component()}
 

  </div>)
};
export default SelectRoute;
