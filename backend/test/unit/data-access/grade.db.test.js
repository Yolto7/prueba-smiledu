const db = require('../../../config/database/connection')
const { GradeDB } = require('../../../src/data-access')

describe('Grade DB', () => {
  test('Should return all grades', async () => {
    const _gradeDB = new GradeDB(db)
    const result = await _gradeDB.getAll()

    expect(result).toBeDefined()
  })
})
