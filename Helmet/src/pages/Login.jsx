import React from 'react';
import { Helmet } from 'react-helmet';

const Login = () => {
  return (
    <>
    <Helmet>
    <meta charset="UTF-8" />
    <title>Login</title>   
    </Helmet>
    <div style={{textAlign:'center'}}>
      <h1 style={{marginTop:'250px',fontSize:'100px'}}>Login Page</h1>
    </div>
    </>
  );
};

export default Login;

