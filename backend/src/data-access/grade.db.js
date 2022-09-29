class GradeDB {
  #db

  constructor (db) {
    this.#db = db
  }

  async getAll () {
    const res = await this.#db.execute('SELECT * FROM grado')
    return res[0]
  }
}

module.exports = GradeDB
