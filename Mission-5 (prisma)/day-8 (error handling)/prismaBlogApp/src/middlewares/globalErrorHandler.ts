import { NextFunction, Request, Response } from "express"
import { Prisma } from "../../generated/prisma/client";



function errorHandler (err:any, req:Request, res:Response, next:NextFunction) {

  let statusCode = 500;
  let errorMessage = "Static Internal Server Error" ;
  let errorDetails = err

//   prismaClientValidationError
  if(err instanceof Prisma.PrismaClientValidationError) {
    statusCode = 400;
    errorMessage = "field missing or incorrect field type!";
    errorDetails = err
  }

  res.status(statusCode)
  res.json({
    message : errorMessage,
    error : errorDetails
  })
}



export default errorHandler;