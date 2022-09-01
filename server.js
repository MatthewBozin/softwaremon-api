const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let mon = {
    'node': {
        'name': 'Node',
        'types': ['electric'],
        'desc': 'Can evolve into many things.', 
        'moves': ['run'],
        'evolves_into': ['npm','nodemon']
    },
    'nodemon': {
        'name': 'Nodemon',
        'types': ['dark','electric'],
        'desc': 'A playful yet helpful demon.', 
        'moves': ['refresh']
    },
    'matui': {
        'name': 'MatUI',
        'types': ['fairy','psychic'],
        'desc': 'Uses its visual powers to make things pretty.', 
        'moves': ['light_screen']
    },
    'mongoose': {
        'name': 'Mongoose',
        'types': ['ground'],
        'desc': '', 
        'moves': ['schema'],
        'evolves_into': ['mongoDB']
    },
    'mongoDB': {
        'name': 'MongoDB',
        'types': ['flying'],
        'desc': 'Mongoose grows wings and takes to the cloud, becoming flying-type.', 
        'moves': ['cluster','visualizer']
    },
    'error': {
        'name': 'Error',
        'types': ['dark','ghost'],
        'desc': 'This mysterious creature appears only when the API is given a name that is not valid.', 
        'moves': ['catch','message','stack_overflow'],
        'evolves_into': ['cors']
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

//the : turns what's on the right side into params
app.get('/api/:name', (request, response) => {
    const monName = request.params.name.toLowerCase()
    if(mon[monName]){
        response.json(mon[monName])
    }else{
        response.json(mon['error'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}!`)
})