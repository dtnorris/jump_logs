import React from 'react';
import { Link } from 'react-router';

const JumpNew = () => {
  return (
    <div>
      <Link to='/jumps'>Jump Index</Link>
      <br/>
      New Jump Form
    </div>
  );
};

export default JumpNew;
