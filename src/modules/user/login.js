const fastify = require('fastify')()
fastify.register(require('@fastify/jwt'), {
  secret: "supersecret"
})

fastify.post('/signup', (req, reply) => {
  // some code
  const username = "marc";
  const password = "12345"

  const token = fastify.jwt.sign({ username, password })
  reply.send({ token })
})

fastify.listen({ port: 3000 }, err => {
  if (err) throw err
})
;