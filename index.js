require('dotenv').config()
const buildApp = require('./src/app')
const config = require('config')

const startApp = async () => {
    const appOptions = {
        logger: true
    }
    const app = await buildApp(appOptions)

    try {
        app.listen(config.get('port'), config.get('hostname'))
        console.log(`app is listening on port ${config.get('port')}`)
    }
    catch (error) {
        throw error
    }
}

startApp()