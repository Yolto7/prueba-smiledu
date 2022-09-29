const { Router } = require('express')

module.exports = function (StudentRoutes, GradeRoutes) {
  const router = Router()

  router.use('/student', StudentRoutes)
  router.use('/grade', GradeRoutes)

  return router
}
