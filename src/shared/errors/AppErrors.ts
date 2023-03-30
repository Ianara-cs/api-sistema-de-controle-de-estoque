export class AppError {
  public readonly message: string

  public readonly statusCode: number

  constructor(message: string, statusCode = 400) {
    this.message = message
    this.statusCode = statusCode
  }
}

export class BadRequestException extends AppError {
  constructor(message: string) {
    super(message);
  }
}


export class NotFoundException extends AppError {
  constructor(message: string) {
    super(message, 404);
  }
}