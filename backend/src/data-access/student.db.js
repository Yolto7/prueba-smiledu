class StudentDB {
  #db

  constructor (db) {
    this.#db = db
  }

  async getAll () {
    const res = await this.#db.execute(`SELECT p.id, p.nombre AS name, p.ape_paterno AS fatherLastname, 
      p.ape_materno AS motherLastname, CONCAT(g.desc_grado," ",g.nivel) AS grade, DATE_FORMAT(p.fecha_naci, "%d-%m-%Y") 
      AS birthDate, p.foto_ruta AS photoPath FROM persona AS p JOIN grado AS g ON g.id = p.id_grado`)

    return res[0]
  }

  async getById (id) {
    const res = await this.#db.execute('SELECT id FROM persona WHERE id = ?', [id])
    return res[0]
  }

  async register (entity) {
    await this.#db.execute(
      'CALL register(?,?,?,?,?,?)',
      [entity.name, entity.fatherLastname, entity.motherLastname, entity.gradeId, entity.birthDate, entity.photo]
    )

    const res = await this.#db.execute('SELECT MAX(id) AS newId FROM persona')
    return res[0][0]
  }

  async delete (id) {
    await this.#db.execute('CALL remove(?)', [id])
    return { deletedId: id }
  }
}

module.exports = StudentDB
