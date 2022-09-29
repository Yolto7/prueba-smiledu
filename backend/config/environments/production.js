const PRODUCTION = {
  PORT: process.env.PORT || 8080,
  DB: {
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '1qazxcvfr4_JN',
    database: process.env.DB_NAME || 'students',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3308
  }
}

module.exports = PRODUCTION
