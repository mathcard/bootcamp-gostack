import React, { useEffect, useState } from 'react';
import api from './services/api';
import Header from './components/Header';
import './App.css'
import image from './assets/background.jpg';

function App() {
  const [projects, setProjects] = useState([]);
  

  useEffect(() => {
    api.get('/projects').then(response => {
      console.log(response.data);
      setProjects(response.data);
    })
  }, []);

  async function handleAddProject() {
    const response = await api.post('projects', {
      owner: 'MathCar',
      title: 'My Text'
    });

    const project = response.data;

    
  setProjects([...projects, project]);
  }

  


  return (
    <>
    <Header title="Home Page">
      <ul>
        <li>Homepage</li>
        <li>Projects</li>
      </ul>
    </Header>
    <Header title="Projects"/>
      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>
      
      <button type="button" onClick={handleAddProject}>Criar no Projeto</button>
      
      
      
      {/*<img src={image} alt="Image" width="400"/>*/}
    </>
  )
}

export default App;