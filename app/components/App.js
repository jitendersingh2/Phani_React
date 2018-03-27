import React from 'react';
// import img from '../assets/images/react_logo_512x512.png';
import Header from './header/Main_Header';
import Login from './login/Login';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Login />
    </div>
    // <div>
    //   <h2 id="heading">Hello ReactJS</h2>
    //   <img
    //     className="image"
    //     style={{ margin: '0.5em' }}
    //     height="40"
    //     width="40"
    //     src={img}
    //     alt="React Logo"
    //   />
    // </div>
  );
};

export default App;
