import React from 'react'

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="content has-text-centered">
        <h4>Matt Welson</h4>
        <p>
          Twitter:{' '}
          <strong>
            <a
              href="https://twitter.com/mattwelson"
              target="_blank"
              rel="noopener noreferrer"
            >
              @MattWelson
            </a>
          </strong>
        </p>
        <p>
          Email:{' '}
          <strong>
            <a href="mailto:matt@mattwelson.com">matt@mattwelson.com</a>
          </strong>
        </p>
        <p>
          <strong>
            <a
              href="https://github.com/mattwelson/mattwelson.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </strong>
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
