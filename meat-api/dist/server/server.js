"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * class for initialization, configuration and server start
 */
const restify = require("restify");
const environment_1 = require("../common/environment");
const mongoose = require("mongoose");
class Server {
    /**
     * Database config and connection
     */
    initializeDb() {
        return mongoose.connect(environment_1.environment.db.url, {
            useMongoClient: true
        });
    }
    /**
     * initialize server, middlewares, routers and server startup
     * @param routers array of routers
     */
    initRoutes(routers) {
        return new Promise((resolve, reject) => {
            try {
                // criar servidor
                this.application = restify.createServer({
                    name: 'meat-api',
                    version: '1.0.0'
                });
                //middlewares
                this.application.use(restify.plugins.queryParser()); //parser de querystring
                // routes
                for (let router of routers) {
                    router.applyRoutes(this.application);
                }
                // start servidor na porta indicada
                // o callback passado é invocado qdo a porta estiver liberada e o server iniciado
                this.application.listen(environment_1.environment.server.port, () => {
                    resolve(this.application);
                });
            }
            catch (error) {
                reject(error);
            }
        });
    }
    /**
     * Server bootstrap
     * @param routers array of routers
     */
    bootstrap(routers = []) {
        // chama métodos para inicialização em geral
        // e retorna a própria instância desta classe já configurada
        return this.initializeDb()
            .then(() => this.initRoutes(routers).then(() => this));
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map