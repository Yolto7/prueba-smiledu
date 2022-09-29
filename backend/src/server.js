const express = require('express')
const cors = require('cors')

class Server {
  #app
  #config

  constructor (config, router) {
    this.#config = config
    this.#app = express()
    this.middlewares()
    this.#app.use(router)
  }

  middlewares () {
    this.#app.use(express.json())
    this.#app.use(express.urlencoded({ extended: false }))
    this.#app.use(cors())
  }

  start () {
    return new Promise((resolve) => {
      this.#app.listen(this.#config.PORT, () => {
        console.log('Server running on port ' + this.#config.PORT)
        resolve()
      })
    })
  }
}

module.exports = Server
