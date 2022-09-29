async function validateSchema (schema, body) {
  try {
    await schema.validateAsync(body)
  } catch (err) {
    throw new Error(err.details[0].message.replaceAll('\"',''))
  }
}

module.exports = { validateSchema }
