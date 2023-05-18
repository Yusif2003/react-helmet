import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
    <Helmet>
    <meta charset="UTF-8" />
    <title>Home</title>   
    </Helmet>
    <div style={{textAlign:'center'}}>
      <h1 style={{marginTop:'250px',fontSize:'100px'}}>Home Page</h1>
    </div>
    </>
  );
};

export default Home;

