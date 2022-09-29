class GradeRepository {
  #gradeDB

  constructor (GradeDB) {
    this.#gradeDB = GradeDB
  }

  async getAll () {
    return await this.#gradeDB.getAll()
  }
}

module.exports = GradeRepository
