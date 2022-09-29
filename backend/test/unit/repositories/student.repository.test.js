const { StudentRepository } = require('../../../src/repositories')
const { StudentModelMock, StudentDBMock } = require('../../mock')

describe('Student Repository', () => {
  test('Should return all students', async () => {
    const _studentDB = StudentDBMock
    _studentDB.getAll.mockReturnValue([
      {
        id: 3,
        name: 'Joaquin Joseph',
        fatherLastname: 'Torres',
        motherLastname: 'Ortega',
        grade: 'Primero SEC',
        birthDate: '07-12-1999',
        photoPath: 'a'
      },
      {
        id: 4,
        name: 'Joaquin Joseph',
        fatherLastname: 'Torres',
        motherLastname: 'Ortega',
        grade: 'Primero SEC',
        birthDate: '07-12-1999',
        photoPath: 'a'
      },
      {
        id: 6,
        name: 'Joaquin Joseph',
        fatherLastname: 'Torres',
        motherLastname: 'Ortega',
        grade: 'Primero SEC',
        birthDate: '07-12-1999',
        photoPath: 'a'
      }
    ])

    const _studentRepository = new StudentRepository(_studentDB)
    const result = await _studentRepository.getAll()

    expect(result).toBeDefined()
  })

  test('Should return id by studentId', async () => {
    const _studentDB = StudentDBMock
    _studentDB.getById.mockReturnValue([
      { id: 3 }
    ])

    const _studentRepository = new StudentRepository(_studentDB)
    const result = await _studentRepository.getById('3')

    expect(result[0]).toEqual({ id: 3 })
  })

  test('Should return empty array', async () => {
    const _studentDB = StudentDBMock
    _studentDB.getById.mockReturnValue([])

    const _studentRepository = new StudentRepository(_studentDB)
    const result = await _studentRepository.getById('a')
    expect(result).toEqual([])
  })

  test('Should register student and return newId', async () => {
    const _studentDB = StudentDBMock
    _studentDB.register.mockReturnValue([
      {
        newId: 3
      }
    ])

    const _studentRepository = new StudentRepository(_studentDB)
    const result = await _studentRepository.register(StudentModelMock)

    expect(result).toBeDefined()
  })

  test('Should delete student and return deletedId', async () => {
    const _studentDB = StudentDBMock
    _studentDB.delete.mockReturnValue([
      {
        deletedId: 3
      }
    ])

    const _studentRepository = new StudentRepository(_studentDB)
    const result = await _studentRepository.delete('3')

    expect(result).toBeDefined()
  })
})
