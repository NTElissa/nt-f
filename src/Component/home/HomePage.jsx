import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
    <Link to="/loginPage">
    <h1
      className="text-3xl font-bold underline text-center"
      style={{ color: '#45B39D', marginTop: '200px' }}
    >
      NTIHINDUKA Elissa
    </h1> </Link>
  );
}

export default Home;