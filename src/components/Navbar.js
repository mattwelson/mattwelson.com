import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'

class Navbar extends React.Component {
  state = {
    isActive: false
  }

  handleMenuToggle = () =>
    this.setState(({ isActive }) => ({ isActive: !isActive }))

  handleMenuClose = () => this.setState(() => ({ isActive: false }))

  render() {
    return (
      <nav className="navbar is-dark">
        <div className="container is-fluid">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" onClick={this.handleMenuClose}>
              <strong>Matt</strong>&nbsp;<span>Welson</span>
            </Link>
            <div
              className={`navbar-burger ${
                this.state.isActive ? 'is-active' : ''
              }`}
              onClick={this.handleMenuToggle}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            className={`navbar-menu ${this.state.isActive ? 'is-active' : ''}`}
          >
            <div className="navbar-start">
              <Link
                className="navbar-item"
                to="/about"
                onClick={this.handleMenuClose}
              >
                About
              </Link>
            </div>
            <div className="navbar-end">
              <a
                className="navbar-item"
                href="https://github.com/mattwelson/mattwelson.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
