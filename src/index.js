const fastify = require('fastify')({ logger: true })

fastify.get('/api', async (request,reply) => {
        return { hello: 'Hello from Server 2'}

})

const start = async () => {
        try {
                await fastify.listen({ port: 5050 })
        } catch (err) {
                fastify.log.error(err)
        process.exit(1)
        }
}
start()