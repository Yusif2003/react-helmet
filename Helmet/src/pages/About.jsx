import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
    <Helmet>
    <meta charset="UTF-8" />
    <title>About</title>
    </Helmet>
    <div style={{textAlign:'center'}}>
      <h1 style={{marginTop:'250px',fontSize:'100px'}}>About Page</h1>
    </div>
    </>
  );
};

export default About;

