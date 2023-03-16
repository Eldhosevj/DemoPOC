import React from 'react';

function Orders() {
  const getHeader = () => {
    // axios.get('URL')
    //   .then((response) =>
    //     // handle success
    //   // console.log(response, 'sucees');
    //     ).catch((error) => {
    //     // handle error
    //   //  console.log(error, 'success');
    //   });
  };
  return (
    <div className="wrapper">
      <div className="main_content">
        <h6>Welcome to Orders</h6>
        <button
          type="button"
          onClick={() => {
            getHeader();
          }}
        >
          Token
        </button>
      </div>
    </div>
  );
}
export default Orders;
