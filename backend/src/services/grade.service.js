class GradeService {
  #gradeRepository

  constructor (GradeRepository) {
    this.#gradeRepository = GradeRepository
  }

  async getAll () {
    return await this.#gradeRepository.getAll()
  }
}

module.exports = GradeService
