import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <>
    <Header title="Home Page">
      <ul>
        <li>Homepage</li>
        <li>Projects</li>
      </ul>
    </Header>
    <Header title="Projects"/>
    </>
  )
}

export default App;