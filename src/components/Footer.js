import React from 'react'

const quotes = [
  'Web dev',
  'Web developer',
  'Frontend developer',
  'Coder',
  'Movie reviewer',
  'Podcast fan',
  'Doing my own thing',
  'I got this',
  `I'm here to write code`,
  'Code all day, sleep all night',
  'Nice reading, reader!',
  'I build websites!',
  'I wish I had more interesting random quotes'
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
          <p className="has-text-grey is-italic">{window && randomQuote()}</p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
