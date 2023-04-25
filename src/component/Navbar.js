import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (

    <div>
      <nav className='nav_title'  >
        <div className='port_title'>
          <h2 style={{ fontSize: '50px', fontStyle: "oblique" }}>Nithya Eswaran</h2>
        </div>
        <div>
          <Link to="/" style={{ marginRight: '30px', fontWeight: 'bold' }}>Home</Link>
          <Link to="/about" style={{ marginRight: '30px', fontWeight: 'bold' }}>About</Link>
          <Link to="/skills" style={{ marginRight: '20px', fontWeight: 'bold' }}>Skills</Link>
          <Link to="/project" style={{ marginRight: '20px', fontWeight: 'bold' }}>Project</Link>
          <Link to="/contact" style={{ marginRight: '20px', fontWeight: 'bold' }}>Contact </Link>
        </div>
      </nav>
     </div>
  )
}

export default Navbar