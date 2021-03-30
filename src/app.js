const Fastify = require('fastify')

const buildApp = async (options = {}) => {
    const app = Fastify(options)
    return app
}

module.exports = buildApp