import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/reminder" className="navbar-brand">ReminderTracker Now</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/reminder" className="nav-link">Reminders</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Reminder Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
          <li className="navbar-item">
          <Link to="/" className="nav-link">Logout</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}