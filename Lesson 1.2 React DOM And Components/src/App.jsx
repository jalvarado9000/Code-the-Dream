import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
  }
]

const App = () => {


  return (
    <>
      <div>
        <h1>My Hacker Stories</h1>
        <Search/>
        <List />
      </div>
    </>
  )
}

const Search = () => {
  const handleChange = (event) => {
    // synthetic event
    console.log(event);
    // value of target (here: input HTML element)
    console.log(event.target.value);
    };
  return(
    <div>
    <label htmlFor="search">Search: </label>
        <input id="search" type="text" onChange={handleChange} />
        <hr />
        </div>
  );
}

const List = () => {
  return (
    <ul>
      {list.map((item) => 
        (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </li>
        );
      )}
    </ul>
  );
}

export default App


{/*
// with block body
const addOne = (count) => {
// perform any task in between
return count + 1;
};
// with concise body as multi line
const addOne = (count) =>
count + 1;
// with concise body as one line
const addOne = (count) => count + 1;
*/}