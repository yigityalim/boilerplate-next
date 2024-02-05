export class CustomError extends Error {
  public name: string;
  public message: string;
  public status: number;

  constructor(message: string = 'An error occurred', status: number = 500) {
    super(message);
    this.name = this.constructor.name;
    this.status = status;
  }

  override toString() {
    return `${this.name}: ${this.message}`;
  }
}

export class NotFoundError extends CustomError {
  constructor(message: string = 'Resource not found') {
    super(message, 404);
  }
}

export class BadRequestError extends CustomError {
  constructor(message: string = 'Bad request') {
    super(message, 400);
  }
}

export class UnauthorizedError extends CustomError {
  constructor(message: string = 'Unauthorized') {
    super(message, 401);
  }
}

export class ForbiddenError extends CustomError {
  constructor(message: string = 'Forbidden') {
    super(message, 403);
  }
}

export class ConflictError extends CustomError {
  constructor(message: string = 'Conflict') {
    super(message, 409);
  }
}

export class InternalServerError extends CustomError {
  constructor(message: string = 'Internal server error') {
    super(message, 500);
  }
}

// Path: lib/exceptions.ts
