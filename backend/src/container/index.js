const { createContainer, asClass, asFunction, asValue, InjectionMode } = require('awilix')
const Server = require('../server.js')
const StartUp = require('../startup.js')

const config = require('../../config/environments')
const Routes = require('../routes')
const db = require('../../config/database/connection')

// Routes
const StudentRoutes = require('../routes/student.route')
const GradeRoutes = require('../routes/grade.route')

// Controllers
const { StudentController, GradeController } = require('../controllers')

// Services
const { StudentService, GradeService } = require('../services')

// Repositories
const { StudentRepository, GradeRepository } = require('../repositories')

// Data Access
const { StudentDB, GradeDB } = require('../data-access')

// Validators
const { StudentSchema } = require('../validators')

// Create container
const container = createContainer({
  injectionMode: InjectionMode.CLASSIC
})

container
  .register({
    app: asClass(StartUp).singleton(),
    server: asClass(Server).singleton(),
    router: asFunction(Routes).singleton()
  })
  .register({
    config: asValue(config),
    db: asValue(db)
  })
  .register({
    StudentDB: asClass(StudentDB).singleton(),
    GradeDB: asClass(GradeDB).singleton()
  })
  .register({
    StudentRepository: asClass(StudentRepository).singleton(),
    GradeRepository: asClass(GradeRepository).singleton()
  })
  .register({
    StudentService: asClass(StudentService).singleton(),
    GradeService: asClass(GradeService).singleton()
  })
  .register({
    StudentController: asClass(StudentController).singleton(),
    GradeController: asClass(GradeController).singleton()
  })
  .register({
    StudentRoutes: asFunction(StudentRoutes),
    GradeRoutes: asFunction(GradeRoutes)
  })
  .register({
    StudentSchema: asValue(StudentSchema)
  })

module.exports = container
