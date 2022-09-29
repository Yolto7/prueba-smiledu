const { Router } = require('express')

module.exports = function (GradeController) {
  const router = Router()

  router.get('/list', GradeController.getAll.bind(GradeController))

  return router
}
