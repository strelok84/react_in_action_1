/* import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); */

import React, { Component } from "react";
import { render } from "react-dom";
import Post from './components/Post';
import Comment from "./components/Comment";
import CreateComment from "./components/CreateComment";

const node = document.getElementById("root");

const root = React.createElement(Post, {
  id: 1, content: " said this is post",
  user: "mark"
}, React.createElement(Comment, {
  id: 2,
  user: "bob",
  content: " commented: wow! how cool!"
}),
React.createElement(CreateComment)

);

render(root, node);
