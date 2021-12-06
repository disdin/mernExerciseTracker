import React from "react";
import { Link } from "react-router-dom"; //instead of anchor tags we are using this 

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg" style={{"padding":"12px 10px"}}>
        <Link to="/" className="navbar-brand">
          ExcerTracker
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Exercises
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                Create Exercise Log
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">
                Create User
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
