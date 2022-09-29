const { StudentService } = require('../../../src/services')
const { StudentRepositoryMock, StudentModelMock } = require('../../mock')

describe('Student Service', () => {
  it('Should return all students of service', async () => {
    const _studentRepository = StudentRepositoryMock
    _studentRepository.getAll.mockReturnValue([
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

    const _studentService = new StudentService(_studentRepository)
    const expected = await _studentService.getAll(StudentModelMock)

    expect(expected).toBeDefined()
  })

  it('Should register student of service', async () => {
    const _studentRepository = StudentRepositoryMock
    _studentRepository.register.mockReturnValue([
      {
        newId: 3
      }
    ])

    const _studentService = new StudentService(_studentRepository)
    const expected = await _studentService.register(StudentModelMock)

    expect(expected).toBeDefined()
  })

  it('Should delete student of service', async () => {
    const _studentRepository = StudentRepositoryMock
    _studentRepository.getById.mockReturnValue([
      {
        id: 3
      }
    ])
    _studentRepository.delete.mockReturnValue([
      {
        deletedId: 3
      }
    ])

    const _studentService = new StudentService(_studentRepository)
    const expected = await _studentService.delete('3')

    expect(expected).toBeDefined()
  })
})
