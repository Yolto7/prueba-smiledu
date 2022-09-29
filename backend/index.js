// Config dotenv
require('dotenv').config()

const container = require('./src/container')
const application = container.resolve('app')

application
  .start()
  .then(async () => {
    console.log('Start Application')
  })
  .catch((err) => {
    console.error(err)
    process.exit()
  })
