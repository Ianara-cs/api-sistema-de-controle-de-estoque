import { CelebrateError } from "celebrate"
import express, { NextFunction, Request, Response } from 'express'
import "express-async-errors"
import "reflect-metadata"
import swagger from "swagger-ui-express"
import { AppError } from '../../errors/AppErrors'
import swaggerDocument from "./../../../swagger.json"
import { router } from './routes'

const app = express()

app.use('/api-docs', swagger.serve, swagger.setup(swaggerDocument))

app.use(express.json())

app.use(router)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if(err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message
    })
  }

  if (err instanceof CelebrateError) {
    return response.status(400).json({
      message: err.details.get("body")?.message,
    });
  }
   
  return response.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`
  })
})

app.listen(5000, () => console.log("Server is running!"))