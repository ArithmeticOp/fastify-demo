const Fastify = require('fastify')
const FastifySwagger = require('fastify-swagger')

const hostname = 'localhost'
const port = 3001

const fastifyApp = Fastify({
    logger: true
})

fastifyApp.register(FastifySwagger, {
    routePrefix: '/documents',
    swagger: {
        info: {
            title: 'fastify documents',
            description: 'example fastify documents',
            version: '1.0.0'
        }
    },
    exposeRoute: true
})

const usersRoute = {
    method: 'POST',
    url: '/users',
    schema: {
        body: {
            username: {
                type: 'string'
            },
            password: {
                type: 'string'
            }
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    userId: {
                        type: 'string'
                    },
                    username: {
                        type: 'string'
                    }
                }
            }
        }
    },
    handler: async (request, reply) => {
        console.log(`request ->`, request.body)
        const requestBody = { ...request.body, mergedObject: true }
        reply.send({
            ...requestBody,
            userId: '1234'
        })
    }
}

fastifyApp.route(usersRoute)

fastifyApp.listen(port, hostname, () => {
    console.log(`server is running on ${port}`)
})