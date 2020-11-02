import React, { Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer'

function App() {
  return (
    <Fragment>
      <Header 
        titulo="CIU" 
        anio="2020"
      />
      <Footer />
    </Fragment>
  );
}

export default App;
