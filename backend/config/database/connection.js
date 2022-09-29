const currentEnv = require('../environments')
const { createPool } = require('mysql2')

const pool = createPool(currentEnv.DB)

// CHECK THE DATABASE CONNECTION WAS SUCCESS
pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.')
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has to many connections')
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused')
    }
  } else {
    console.log('Dadatabase is connected')
  }

  if (connection) connection.release()
})

// now get a Promise wrapped instance of that pool
const promisePool = pool.promise()

module.exports = promisePool
