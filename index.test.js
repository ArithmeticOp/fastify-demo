const buildApp = require('./index')

test('should return OK', async () => {
    expect.assertions(2)
    const appOptions = {
        logger: true
    }
    const app = buildApp(appOptions)

    const result = await app.inject({
        method: 'GET',
        url: '/'
    })

    expect(result.statusCode).toBe(200)
    expect(result.body).toBe('OK')
})