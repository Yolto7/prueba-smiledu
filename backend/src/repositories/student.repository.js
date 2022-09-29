class StudentRepository {
  #studentDB

  constructor (StudentDB) {
    this.#studentDB = StudentDB
  }

  async getAll () {
    return await this.#studentDB.getAll()
  }

  async getById (id) {
    return await this.#studentDB.getById(id)
  }

  async register (entity) {
    return await this.#studentDB.register(entity)
  }

  async delete (id) {
    return await this.#studentDB.delete(id)
  }
}

module.exports = StudentRepository
