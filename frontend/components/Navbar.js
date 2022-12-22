import React from 'react';

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <h1>Kripto İzleyici</h1>
      <div className="dark-mode__toggle" onClick={props.toggleGm}>
        <div
          className={props.gm ==="on" ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
