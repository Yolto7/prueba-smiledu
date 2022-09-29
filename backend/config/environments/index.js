const DEVELOPMENT = require('./development')
const PRODUCTION = require('./production')

// default node_env
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development'
}

// default app_env
if (!process.env.APP_ENV) {
  process.env.APP_ENV = 'development'
}

let currentEnv = DEVELOPMENT

if (process.env.NODE_ENV === 'production') {
  currentEnv = PRODUCTION
}

module.exports = currentEnv
