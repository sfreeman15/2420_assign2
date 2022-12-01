const fastify = require('fastify')({ logger: true })
const fs = require("fs")

fastify.get('/api', async (request,reply) => {
        //reply.sendFile('../html/index.html')
        //return fs.createReadStream('/var/www/index.html', 'utf8')
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
start(

)