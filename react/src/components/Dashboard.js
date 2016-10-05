import React from 'react';
import { Link } from 'react-router';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <br/>
      <Link to='/jumps/new'>New Jump</Link>
      <br/>
      <Link to='/jumps'>Past Jumps</Link>
    </div>
  );
};

export default Dashboard;

