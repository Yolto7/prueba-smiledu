const { validateSchema } = require('../utils')

class StudentController {
  #studentService
  #studentSchema

  constructor (StudentService, StudentSchema) {
    this.#studentService = StudentService
    this.#studentSchema = StudentSchema
  }

  async getAll (_req, res) {
    try {
      const data = await this.#studentService.getAll()
      res.status(200).json({ data, status: true })
    } catch (e) {
      res.status(400).json({ message: e.message, status: false })
    }
  }

  async register (req, res) {
    try {
      req.body.photo = req.file.path
      await validateSchema(this.#studentSchema, req.body)

      const data = await this.#studentService.register(req.body)
      res.status(201).json({ data, status: true })
    } catch (e) {
      res.status(400).json({ message: e.message, status: false })
    }
  }

  async delete (req, res) {
    try {
      const data = await this.#studentService.delete(req.params.id)
      res.status(200).json({ data, status: true })
    } catch (e) {
      res.status(400).json({ message: e.message, status: false })
    }
  }
}

module.exports = StudentController
