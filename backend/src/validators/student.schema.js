const Joi = require('joi')

const Student = Joi.object({
  name: Joi.string().min(1).max(50).required(),
  fatherLastname: Joi.string().min(1).max(50).required(),
  motherLastname: Joi.string().min(1).max(50).required(),
  gradeId: Joi.number().integer().min(1).max(15).required(),
  birthDate: Joi.date().required(),
  photo: Joi.string().min(1).max(255).required()
})

module.exports = Student
