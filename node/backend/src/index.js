const { response } = require('express');
const cors = require('cors');
const { uuid, isUuid } = require('uuidv4');
const express = require('express');

const app = express();

app.use(cors());

app.use(express.json());

const projects = [];

// Criando middleware 
function logRequests(request, response, next) {
    const { method, url } = request;
    const logLabel = `[${method.toUpperCase()}] ${url}`;
    console.time(logLabel);
    next(); // Próximo middleware
    console.timeEnd(logLabel);
}

function validateProjectId(request, response, next){
    const { id } = request.params;
    if(!isUuid(id)){
        return response.status(400).json({error: 'Invalid project ID.'});
    }

    return next();
}

app.use(logRequests); // Permitinado utilizar middleware em todas as rotas
app.use('/projects/:id', validateProjectId); // Permitindo usar o middleware em rotas especificas

// Executando middleware apenas na rota get
app.get('/projects', /*logRequests,*/ (request, response) => {
    const { owner } = request.query; 
    const results = owner ? projects.filter(project => project.owner ===  owner) : projects;
    return response.json(results);
})

app.post('/projects', (request, response) => {
    const {title, owner} = request.body;
    const project = { id: uuid(), title, owner };
    projects.push(project);
    return response.json(project);
})

app.put('/projects/:id', validateProjectId, (request, response) => {
    const { id } = request.params;
    const { title, owner } = request.body;
    const projectIndex = projects.findIndex(project => project.id == id);
    if(projectIndex < 0){
        return response.status(400).json({error: 'Project not found.'})
    }

    const project = { id, title, owner};
    projects[projectIndex] = project;
    return response.json(project);
})

app.delete('/projects/:id', (request, response) => {
    const { id } = request.params;
    const projectIndex = projects.findIndex(project => project.id == id);

    if(projectIndex < 0){
        return response.status(400).json({error: 'Project not found.'})
    }

    projects.splice(projectIndex, 1); 
    return response.status(204).send();
})

app.listen(3333, () => {
    console.log('Back-end started! ')
});