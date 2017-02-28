import React from 'react';
import Nav from 'Nav';

let Main = props => (
  <div>
    <h2>Main component</h2>
    <Nav/>
    {props.children}
  </div>
);

export default Main;
