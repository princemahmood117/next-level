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

//   PrismaClient-KnownRequestError
  else if(err instanceof Prisma.PrismaClientKnownRequestError) {
    if(err.code === "P2025") {
        statusCode = 400;
        errorMessage = "An operation failed because it depends on one or more records that were required but not found! (code-p205)";
        errorDetails = err
    }
  }

//   PrismaClient-UnknownRequestError
  else if (err instanceof Prisma.PrismaClientUnknownRequestError) {
        statusCode = 400;
        errorMessage = "Response from the Engine was empty!";
        errorDetails = err
  }

//   PrismaClient-RustPanicError
  else if (err instanceof Prisma.PrismaClientRustPanicError) {
        statusCode = 500;
        errorMessage = "internal error: entered unreachable code or server crashed!";
        errorDetails = err
  }

  res.status(statusCode)
  res.json({
    message : errorMessage,
    error : errorDetails
  })
}



export default errorHandler;