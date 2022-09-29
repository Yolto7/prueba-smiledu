const { Router } = require('express')
const { Upload } = require('../middlewares')

module.exports = function (StudentController) {
  const router = Router()

  router.get('/list', StudentController.getAll.bind(StudentController))
  router.post('/create', Upload.single('photo'), StudentController.register.bind(StudentController))
  router.delete('/delete/:id', StudentController.delete.bind(StudentController))

  return router
}
