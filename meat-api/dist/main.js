"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * app entrypoint
 */
const server_1 = require("./server/server");
const users_router_1 = require("./users/users.router");
// server instance
const server = new server_1.Server();
// array of routers
const routers = [users_router_1.usersRouter];
// server startup
server.bootstrap(routers).then(server => {
    console.log('Server is listening on: ', server.application.address());
}).catch(error => {
    console.log('Server failed to start');
    console.error(error);
    process.exit(1); // encerrar de forma anormal (dif zero)
});
//# sourceMappingURL=main.js.map