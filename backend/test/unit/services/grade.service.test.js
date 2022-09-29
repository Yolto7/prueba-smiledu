const { GradeService } = require('../../../src/services')
const { GradeRepositoryMock } = require('../../mock')

describe('Grade Service', () => {
  it('Should return all grades of service', async () => {
    const _gradeRepository = GradeRepositoryMock
    _gradeRepository.getAll.mockReturnValue([
      {
        id: 1,
        desc_grado: '2 años',
        nivel: 'INI'
      },
      {
        id: 2,
        desc_grado: '3 años',
        nivel: 'INI'
      },
      {
        id: 3,
        desc_grado: '4 años',
        nivel: 'INI'
      },
      {
        id: 4,
        desc_grado: '5 años',
        nivel: 'INI'
      },
      {
        id: 5,
        desc_grado: 'Primero',
        nivel: 'PRI'
      },
      {
        id: 6,
        desc_grado: 'Segundo',
        nivel: 'PRI'
      },
      {
        id: 7,
        desc_grado: 'Tercero',
        nivel: 'PRI'
      },
      {
        id: 8,
        desc_grado: 'Cuarto',
        nivel: 'PRI'
      },
      {
        id: 9,
        desc_grado: 'Quinto',
        nivel: 'PRI'
      },
      {
        id: 10,
        desc_grado: 'Sexto',
        nivel: 'PRI'
      },
      {
        id: 11,
        desc_grado: 'Primero',
        nivel: 'SEC'
      },
      {
        id: 12,
        desc_grado: 'Segundo',
        nivel: 'SEC'
      },
      {
        id: 13,
        desc_grado: 'Tercero',
        nivel: 'SEC'
      },
      {
        id: 14,
        desc_grado: 'Cuarto',
        nivel: 'SEC'
      },
      {
        id: 15,
        desc_grado: 'Quinto',
        nivel: 'SEC'
      }
    ])

    const _gradeService = new GradeService(_gradeRepository)
    const expected = await _gradeService.getAll()

    expect(expected).toBeDefined()
  })
})
