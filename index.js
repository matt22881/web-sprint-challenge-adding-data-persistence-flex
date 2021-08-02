// start your server here
require('dotenv').config()
const server = require('./api/server')

const p = 5000


server.listen(p => {
    console.log(`\n --- API Server listening on port ${p} --- \n`)
})