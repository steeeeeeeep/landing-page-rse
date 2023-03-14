import React from "react";

import Head from './components/header';
import Content from './components/hero'
import About from './components/about'

const index = () => {
  return (
    <div className="container mx-auto">
      <Head />
      <Content />
      <About />
    </div>
  );
};

export default index;
