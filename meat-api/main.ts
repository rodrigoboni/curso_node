/**
 * app entrypoint
 */ 
import {Server} from './server/server'
import {usersRouter} from './users/users.router'

// server instance
const server = new Server()

// array of routers
const routers = [usersRouter];

// server startup
server.bootstrap(routers).then(server=>{
    console.log('Server is listening on: ', server.application.address())
}).catch(error=>{
    console.log('Server failed to start')
    console.error(error)
    process.exit(1) // encerrar de forma anormal (dif zero)
})