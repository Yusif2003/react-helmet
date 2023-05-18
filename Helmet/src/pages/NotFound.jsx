import React from 'react';
import { Helmet } from 'react-helmet';

const NotFound = () => {
  return (
    <>
    <Helmet>
    <meta charset="UTF-8" />
    <title>NotFound</title>   
    </Helmet>
    <div style={{textAlign:'center'}}>
      <h1 style={{marginTop:'250px',fontSize:'100px'}}>NotFound Page</h1>
    </div>
    </>
  );
};

export default NotFound;

