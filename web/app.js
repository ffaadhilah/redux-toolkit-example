import React from 'react';
import Header from './shared/Header';

const WebAppTitle = () => {
  return (
    <div>
      <h2 style={{color: '#FF0000', fontSize: '30'}}>
        React Native for Web.
      </h2>
    </div>
  );
};

const App = () => {
  return (
    <>
    <Header />
      <WebAppTitle />
    </>
  );
};

export default App;
