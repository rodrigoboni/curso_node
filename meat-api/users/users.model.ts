/**
 * User model (temporário, simulando bd)
 */
const users = [
  {id: '1', name:'zé roela', email:'ze.roela@gmail.com'},
  {id: '2', name:'zé das couves', email:'couve@gmail.com'}
]

export class User {
  static findAll(): Promise<any[]> {
    return Promise.resolve(users)
  }

  static findById(id: string): Promise<any>{
    return new Promise(resolve=>{
      const filtered = users.filter(user=> user.id === id)
      let user = undefined
      if(filtered.length > 0) {
        user = filtered[0]
      }

      resolve(user)
    })
  }
}