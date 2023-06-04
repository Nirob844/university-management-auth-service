import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import globalErrorHandler from './app/middlewares/globarErrorHandler'
import usersRouter from './app/modules/users/users.route'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/users/', usersRouter)

// global error handler
app.use(globalErrorHandler)

//Testing
app.get('/', async (req: Request, res: Response) => {
  res.send('Working Successfully')
})

export default app
