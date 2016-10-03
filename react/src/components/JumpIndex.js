import React from 'react';
import { Link } from 'react-router';

const JumpIndex = () => {
  return (
    <div>
      Jump Index
      <br/>
      <Link to='/jumps/new'>New Jump</Link>
    </div>
  );
};

export default JumpIndex;
