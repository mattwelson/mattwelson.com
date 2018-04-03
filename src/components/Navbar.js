import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'

class Navbar extends React.Component {
  state = {
    isActive: false
  }

  handleMenuOpen = () =>
    this.setState(({ isActive }) => ({ isActive: !isActive }))

  render() {
    return (
      <nav className="navbar is-light">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <strong>Matt</strong>&nbsp;<span>Welson</span>
            </Link>
            <div
              className={`navbar-burger ${
                this.state.isActive ? 'is-active' : ''
              }`}
              onClick={this.handleMenuOpen}
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
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/products">
                Products
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
