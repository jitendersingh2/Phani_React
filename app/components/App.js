import React from 'react';
// import img from '../assets/images/react_logo_512x512.png';
import Header from './header/MainHeader';
import Search from './search/Search';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Search />
    </div>
  );
};

export default App;
