import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { AcademicSemesterRoutes } from './app/modules/academicSemester/academicSemester.route';
import { UserRoutes } from './app/modules/user/user.route';
const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes
app.use('/api/v1/users/', UserRoutes);
app.use('/api/v1/academic-semester/', AcademicSemesterRoutes);

// global error handler
app.use(globalErrorHandler);

//Testing
app.get('/', async (req: Request, res: Response) => {
  res.send('Working Successfully');
  // throw new Error('testing')
});

export default app;
