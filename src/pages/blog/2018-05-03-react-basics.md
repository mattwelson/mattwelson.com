---
templateKey: blog-post
title: React Basics
date: 2018-05-02T22:11:40.052Z
description: >-
  This is intended to be a 1 hour primer on what React.js is, what it isn't and
  when and why you might use it. This was written to be the script for a quick
  run through via screen share.
readMore: ''
tags:
  - Code
  - Development
  - Reactjs
---
[A great primer](https://medium.freecodecamp.org/a-comprehensive-guide-to-react-js-in-2018-ba8bb6975597)
## What **IS** React?
React is a front end javascript library built and maintained by Facebook. It's open source, with a fairly permissive licence, except you can't sue Facebook if anything goes wrong and you can't patent it - the wording on this caused a whole bunch of confusion in a couple of different waves. 

React is made up of components, what is rendered by a component is determined by its **state** and the **props** being passed to it. A component is a reusable unit of functionality, which may contain any number of child components.

Components can be made with functions, or they can use the es2015 class syntax. If you use a class, it extends React.Component, and must at minimum implement a render function.
<iframe src="https://codesandbox.io/embed/km7vyq559v" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## What isn't React
React isn't new. It's been around for 5 years.

React isn't MVC. It's only the View layer of an application, but that's not a bad thing! 

React isn't Angular. It doesn't have an in built router or an ajax method or a kitchen sink or anything like that. To acheive that stuff you'll need to go find an external library, there are many of those and lots of them are amazing. Some people think of this as a con to using React and that it adds to the learning curve. It doesn't have 2 way data binding, instead of the UI magically updating the state, you need to do that via events.

React isn't JQuery. Instead of manipulating the DOM, you manipulate the state that is creating the DOM. So if you want to toggle a button to display or hide some text you might take the following steps:
1. Create a state object with a "displayText: true" property
2. Change the render function to show or hide the text based on this state
3. Add the events so the button can change the state
<iframe src="https://codesandbox.io/embed/84jjqn114l" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## Let's have a look
CodeSandbox.io is a great way to see what a React application looks like without all the set up overhead of writing a modern JavaScript app. It's based off the create-react-app starter which is already a great default template that abstracts a huge amount of overhead away from the developer.

Let's go and start a new project! Be sure to use React first. 
<iframe src="https://codesandbox.io/embed/new" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

### JSX and es2015 things
We're going to run through each file but FIRST, let's take a quick peaking at index.js. This might look crazy to you, it's nothing like the JS that we use at work. 

- import and export are key words in es2015. They do exactly what they say, they allow you to import dependencies and export your own. The first two import statements are using dependencies hosted on NPM and specified in the `project.json` file, the next import is one of the files in this project, which is why it starts with `./`. Although import and export are part of the JS spec, they don't do anything without the use of a build tool at the moment. `import React from 'react'` takes the default export from the project - `import { render } from 'react-dom'` only takes the export called render. Normally this could also be accessed with `ReactDom.render`.
- const is a new keyword, along with let. They both replace var, and just have significantly better scoping, much more consistent with other languages. Styles is just a js object.
- Weird arrows? This is an arrow function, it's short hand, the empty parenthises are where you might insert parameters, the right hand stuff is what the function returns.
- Html? But this is a javascript file? This isn't HTML, it's JSX. Which allows you to write React a lot easier. It's just a short hand way of writing what's really happening. In react you can use all native html elements plus any components you write yourself. There's slight caveats to that which we will go into later. JSX isn't needed to work with React, but it makes it a lot easier! Go to reactjs.org and look at the last two examples. There's a button to toggle the jsx syntax.
- QUICK ASIDE: Some people think that React is unseparating concerns, and is thus terrible. I like the argument that separating concerns by components is better than an arbitrary split into JS, HTML, and CSS. Also - there's lots of ways to write React that DO separate logic and display a lot better than the slightly easier to understand way we'll be writing it today.

### Running through each file
Starting at the top:
1. `public/index.html`: This is all the HTML that is required. Note there is no .js file being included - that's inserted by webpack. The only element in the body is the div with id="root". This is where our application gets attached - we'll see that later.
2. `src/Hello.js`: This is a super simple example of a stateless functional component - which is fancy talk for a component that is a function rather than a class. This file imports React, which any file using JSX must do. It then has the business end of the file all in one line. 
    - `export default`: this means that when you import from this file, you don't need to specify what you want to take from it.
    - `({ name })`: this is cool es2015 syntax that "destructures" the parameter. A React stateless functional component gets passed the `props` object - this is data passed from the parent component
    - `=>`: This is the arrow function syntax, the stuff on the left in brackets is the paramters, the right is what is returned.
    - `{name}`: This means the variable name will be displayed
3. `src\index.js`: This is the actual application itself! It imports serveral things - including the Hello component defined in the other file. 
    - `const styles`: this object contains some basic css stuff, the names are just javascript-ised. There's plenty of ways to do css in React, including just importing a css file. 
    - Again, app is a functional component
    - It contains a div with the style property set to the styles object we saw above
    - Then it includes the Hello component we saw in the Hello file, passing it the name prop. Let's quickly change that prop and see what happens!
    - Then we have a boring old h2, including some weird char thing that is the sparkles you can see in the preview
    - Finally! This render line is where the App actually gets added to the DOM. You could actually call render and attach React to several divs on your page, which I think is what happened in Facebook, at least as they transitioned and started introducing more and more React. The `render` function was imported above from react-dom.
4.  `package.json`: This is part of most js projects - it allows dependency management and such. You can see the versions of react, react-dom and react-scripts used. React dom is used in the project to actually turn our application into html, it used to be included in React itself but is separate now to handle react native. React scripts is just used to build and test the application, it abstracts the build settings and configuration stuff. 

## If we have time, let's make something happen
Let's iterate and make something. Let's start with a dumb counter.
First let's convert Hello.js into Counter.js - here's a starter with this step - and hey, let's add some styles while we're here. These styles are just dumb classnames with bulmacss added on top. Note: We can't use class, as that's a reserved word in javascript, instead we use className.

<iframe src="https://codesandbox.io/embed/olnpv02v0z" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

We have converted to a class so we could start working with state. 
1. First up, let's add a default state.
2. Next let's show that in the ui.
3. Let's add a button
4. Then an action event
5. Then a click function
6. Then write the action event properly
7. Then switch to stylings
    ```javascript
    import React from "react";
    class Counter extends React.Component {
        state = { count: 0 };
        handleIncrement = () => {
            this.setState(({ count }) => ({ count: count + 1 }));
        };
        render() {
            return (
            <div className="tags has-addons" style={{ justifyContent: "center" }}>
                <span className="tag is-info">{this.state.count}</span>
                <span className="tag" onClick={this.handleIncrement}>
                ++
                </span>
            </div>
            );
        }
    }
    export default Counter;
    ```
8. Try chucking a bunch more instances in the index.js file!
9. Click link a bunch


Cool so now we can have a bunch of counters that work independently, but what if we wanted to combine these results, maybe to send to an api or to just show the sum. We would need to elevate the state, so instead of each Counter taking care of itself, we'd create the state higher up.

#### Example with elevated state
<iframe src="https://codesandbox.io/embed/0mx045q75l" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

---
#### Example with sliders instead
This example also shows how easy it is to change the model to handle HSL instead
<iframe src="https://codesandbox.io/embed/mm652jzj1y" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
