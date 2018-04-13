import React from 'react'
import Link from 'gatsby-link'

const quotes = [
  <Link to="/tags/code">Web dev</Link>,
  'Web developer',
  'Frontend developer',
  <Link to="/tags/code">Coder</Link>,
  'Movie reviewer',
  'Podcast fan',
  'Doing my own thing',
  'I got this',
  <Link to="/tags/code">I'm here to write code</Link>,
  <Link to="/tags/code">Code all day, sleep all night</Link>,
  'Nice reading, reader!',
  'I build websites!'
]
const randomQuote = () => quotes[Math.floor(Math.random() * quotes.length)]

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="columns">
        <div className="column content">
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
        <div className="column content has-text-right">
          <h4 className="has-text-light">Matt Welson</h4>
          <p className="has-text-grey is-italic">
            {typeof window !== `undefined` && randomQuote()}
          </p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
