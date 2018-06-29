---
templateKey: blog-post
title: Writing a Dice Roller for Monster of the Week
date: 2018-06-29T04:59:34.236Z
description: >-
  Building a dice roller in React, starting with logic and working our way
  towards a finished, styled application with tests.
readMore: Roll Cool!
tags:
  - Dev
  - React
  - TDD
---
## What we're making

### A dice roller
One of the [latest dailyprogrammer challenges](https://www.reddit.com/r/dailyprogrammer/comments/8s0cy1/20180618_challenge_364_easy_create_a_dice_roller/) was to create a dice rolling application that would take in some standard notation (1d20 for example, which means 1 20 sided dice is rolled) and then show the result. It's also common to show modifiers that you'd add to the result at the same time, like 2d8+3. The challenge inspired me to write the dice rolling logic as the core of a hopefully helpful React app.

### Monster of the Week
Monster of the Week is a tabletop RPG, where the players roll 2 6 sided dice and add one of 5 attributes that describe their character. Unlike Dungeons and Dragons the action isn't measured against a different target determined by the Dungeon Master, it always follows the same rules. Six or below is a failure, seven to nine is a mixed success, and ten or above is a success. If the player has leveled up a move they may get some bonuses for rolling a 12 or above. It's a really fun variant of an RPG, with great character sheets to get started from.

### CodeSandbox
[Codesandbox.io](https://codesandbox.io) is great. It's an online editor that let's you easily start JavaScript projects without a tonne of setup. You can just get started. I did all the development of this app using it.

### Other things we'll be using
Here's a few links you might find helpful if you get started on a similar project
- [React docs](https://reactjs.org/)
- [Jest docs](http://jestjs.io/)
- [Styled components](https://www.styled-components.com/)

## Getting started
