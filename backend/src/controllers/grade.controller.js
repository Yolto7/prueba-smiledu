class GradeController {
  #gradeService

  constructor (GradeService) {
    this.#gradeService = GradeService
  }

  async getAll (_req, res) {
    try {
      const data = await this.#gradeService.getAll()
      res.status(200).json({ data, status: true })
    } catch (e) {
      res.status(400).json({ message: e.message, status: false })
    }
  }
}

module.exports = GradeController
