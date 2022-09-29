const { StudentModelMock } = require('../../mock')
const db = require('../../../config/database/connection')
const { StudentDB } = require('../../../src/data-access')

describe('Student DB', () => {
  test('Should return all students', async () => {
    const _studentDB = new StudentDB(db)
    const result = await _studentDB.getAll()

    expect(result).toBeDefined()
  })

  test('Should return id by studentId', async () => {
    const _studentDB = new StudentDB(db)
    const result = await _studentDB.getById('3')
    expect(result[0]).toEqual({ id: 3 })
  })

  test('Should return empty array', async () => {
    const _studentDB = new StudentDB(db)
    const result = await _studentDB.getById('a')
    expect(result).toEqual([])
  })

  /* test('Should register student and return newId', async () => {
    const _studentDB = new StudentDB(db)
    const result = await _studentDB.register(StudentModelMock)

    expect(result).toBeDefined()
  })

  test('Should delete student and return deletedId', async () => {
    const _studentDB = new StudentDB(db)
    const result = await _studentDB.delete('6')

    expect(result).toBeDefined()
  }) */
})
