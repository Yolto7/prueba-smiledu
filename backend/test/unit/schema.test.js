const { StudentSchema } = require('../../src/validators')

describe('schema', () => {
  test('minimum properties', () => {
    // NOTE: this has to be the minimum fields needed to create a user
    // the idea is that if one is added, this test should start failing.
    const { value } = StudentSchema.validate({
      name: 'Joaquin Joseph',
      fatherLastname: 'Torres',
      motherLastname: 'Ortega',
      gradeId: 11,
      birthDate: '1999-12-07',
      photo: 'a'
    })

    value.birthDate = new Date(value.birthDate).toISOString()
    expect(value).toEqual({
      name: 'Joaquin Joseph',
      fatherLastname: 'Torres',
      motherLastname: 'Ortega',
      gradeId: 11,
      birthDate: new Date('1999-12-07').toISOString(),
      photo: 'a'
    })
  })

  test('name is required', () => {
    const { error } = StudentSchema.validate({
      fatherLastname: 'Torres',
      motherLastname: 'Ortega',
      gradeId: 11,
      birthDate: '1999-12-07',
      photo: 'a'
    })

    const message = error.details[0].message.replaceAll('\"','')
    expect(message).toBe('name is required')
  })

  test('fatherLastname is required', () => {
    const { error } = StudentSchema.validate({
      name: 'Joaquin Joseph',
      motherLastname: 'Ortega',
      gradeId: 11,
      birthDate: '1999-12-07',
      photo: 'a'
    })

    const message = error.details[0].message.replaceAll('\"','')
    expect(message).toBe('fatherLastname is required')
  })

  test('motherLastname is required', () => {
    const { error } = StudentSchema.validate({
      name: 'Joaquin Joseph',
      fatherLastname: 'Torres',
      gradeId: 11,
      birthDate: '1999-12-07',
      photo: 'a'
    })

    const message = error.details[0].message.replaceAll('\"','')
    expect(message).toBe('motherLastname is required')
  })

  test('gradeId is required', () => {
    const { error } = StudentSchema.validate({
      name: 'Joaquin Joseph',
      fatherLastname: 'Torres',
      motherLastname: 'Ortega',
      birthDate: '1999-12-07',
      photo: 'a'
    })

    const message = error.details[0].message.replaceAll('\"','')
    expect(message).toBe('gradeId is required')
  })

  test('birthDate is required', () => {
    const { error } = StudentSchema.validate({
      name: 'Joaquin Joseph',
      fatherLastname: 'Torres',
      motherLastname: 'Ortega',
      gradeId: 11,
      photo: 'a'
    })

    const message = error.details[0].message.replaceAll('\"','')
    expect(message).toBe('birthDate is required')
  })

  test('photo is required', () => {
    const { error } = StudentSchema.validate({
      name: 'Joaquin Joseph',
      fatherLastname: 'Torres',
      motherLastname: 'Ortega',
      gradeId: 11,
      birthDate: '1999-12-07'
    })

    const message = error.details[0].message.replaceAll('\"','')
    expect(message).toBe('photo is required')
  })
})
