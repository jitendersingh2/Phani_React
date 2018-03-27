import React from 'react';

const Login = () => {
  return (
    <form>
      <ul className="flex-outer">
        <li>
          <label htmlFor="first-name">
            Last four numbers of SSN 
          </label>
          <input type="text" id="first-name" placeholder="Enter last 4 digits of your SSN here" />
        </li>
        <li>
          <label htmlFor="last-name">
            Last Name
          </label>
          <input type="text" id="last-name" placeholder="Enter your last name here" />
        </li>
        <li>
          <label htmlFor="last-name">
            House Number
          </label>
          <input type="text" id="last-name" placeholder="Enter your house number here" />
        </li>
        <li>
          <button>Search</button>
        </li>
      </ul>
    </form>
  );
};

export default Login;
