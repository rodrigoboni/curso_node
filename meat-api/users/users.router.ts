/**
 * User router
 * 
 * rotas / endpoints para o recurso users
 */
import * as restify from 'restify'
import {Router} from '../common/router'
import {User} from './users.model'

class UsersRouter extends Router {
  applyRoutes(application: restify.Server) {

    // TODO Criar controllers / arquivos a parte para implementação dos métodos, extraindo do router

    application.get('/users', (req, resp, next)=>{
      User.findAll().then(users=>{
        resp.json(users)
        return next()
      })
    })

    application.get('/users/:id', (req, resp, next)=>{
      User.findById(req.params.id).then(user=>{
        if(user) {
          resp.json(user)
          return next()
        }

        resp.send(404)
        return next()
      })
    })
  }
}

export const usersRouter = new UsersRouter()