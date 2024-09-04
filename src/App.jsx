import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Form from './components/form/Form';
import './style/index.css';

const App = () => {
  return (
    <div className='app-container'>
      <Header />
      <Form />
      <Footer />
    </div>
  );
};

export default App;
