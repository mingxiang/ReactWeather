import React from 'react';
import {Link} from 'react-router';

let Examples = props => (
  <div>
    <h1 className="text-center">Examples</h1>
    <p>Here are a few example locations to try out:</p>
    <ol>
      <li>
        <Link to ='/?location=Philadelphia'>Philadelphia, PA</Link>
      </li>
      <li>
        <Link to ='/?location=Rio'>Rio, Brazil</Link>
      </li>
    </ol>
  </div>
);

export default Examples;
