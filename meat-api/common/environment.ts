/**
 * App config, defaults etc
 */
export const environment = {
  server: { port: process.env.SERVER_PORT || 3000 }, // var ambiente SERVER_PORT ou default 3000
  db: { url: process.env.DB_URL || 'mongodb://localhost/meat-api'} // var ambiente ou default
}