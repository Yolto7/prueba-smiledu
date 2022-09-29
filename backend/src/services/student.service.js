class StudentService {
  #studentRepository

  constructor (StudentRepository) {
    this.#studentRepository = StudentRepository
  }

  async getAll () {
    return await this.#studentRepository.getAll()
  }

  async register (entity) {
    return await this.#studentRepository.register(entity)
  }

  async delete (id) {
    const entityStudent = await this.#studentRepository.getById(id)

    if (entityStudent.length !== 0) {
      return await this.#studentRepository.delete(id)
    } else {
      throw new Error(`the student with ID [${id}] not exists`)
    }
  }
}

module.exports = StudentService
