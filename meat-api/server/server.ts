/**
 * class for initialization, configuration and server start
 */
import * as restify from 'restify';
import {environment} from '../common/environment'
import {Router} from '../common/router'
import * as mongoose from 'mongoose'

export class Server {
  application!: restify.Server; // restify server instance

  /**
   * Database config and connection
   */
  initializeDb(): Promise<any> {
    return mongoose.connect(environment.db.url, {
      useMongoClient: true
    })
  }

  /**
   * initialize server, middlewares, routers and server startup
   * @param routers array of routers
   */
  initRoutes(routers: Router[]): Promise<any> {
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
        for(let router of routers) {
          router.applyRoutes(this.application)
        }

        // start servidor na porta indicada
        // o callback passado é invocado qdo a porta estiver liberada e o server iniciado
        this.application.listen(environment.server.port, () => {
          resolve(this.application)
        });
      } catch (error) {
        reject(error)
      }
    })
  }

  /**
   * Server bootstrap
   * @param routers array of routers
   */
  bootstrap(routers: Router[] = []): Promise<Server> {
    return this.initializeDb()
      .then(()=> this.initRoutes(routers).then(() => this))
  }
}