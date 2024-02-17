import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as React from 'react';

{/* React command: npm create vite@latest . -- --template react*/}
{/* git status, git branch, git checkout -b name,  /}


{/* ARRAY OBJECT IN REACT*/}

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
]

{/* ARRAY IN REACT*/}

const welcome = { greeting: 'Hey', title: 'React' }
const numbers = [1, 2, 3, 4];

{/* MAP IN REACT*/}
const exponentialNumbers = numbers.map(function (number) {
  return number * number;
})

{/* FUNCTION IN REACT*/}

function getTitle(title) {
  return title;
}

function App() {
  const title = 'React';

  return (

    <div>
{/* INPUT AND LABEL*/}

      <h1>My Hacker Stories</h1>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" />
      <hr />




{/* 

      <h1>Hello {title}</h1>
      <h1>{welcome.greeting} {getTitle(welcome.title)}</h1>
      <h1>{exponentialNumbers}</h1>

*/}


    </div>

  );
}
export default App;