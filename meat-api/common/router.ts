import * as restify from 'restify'

// classe abstrata para definição de rotas (router)
export abstract class Router {
  abstract applyRoutes(application: restify.Server):void
}