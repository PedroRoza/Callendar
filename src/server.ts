import Fastify from 'fastify'

const app = Fastify()
/**
 * Methods HTTP: Get (search), Post(create), Put(update), Patch(especific update), Delete
 */

app.get('/', () => {
  return 'hello world'
})

app.listen({
  port: 3333,
}).then(() => {
  console.log("Server Running")
})