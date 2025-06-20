import type { Static, TSchema } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";
export class AppError extends Error {
  public errorCode: string;
  public status: number;
  constructor(message: string, errorCode: string) {
    super(message);
    this.name = "AppError";
    this.errorCode = errorCode;
    this.status = 500; // Default to Internal Server Error
    Error.captureStackTrace?.(this, AppError);
  }
}

export class DatabaseError extends AppError {
  constructor(message: string, errorCode: string) {
    super(message, errorCode);
    this.name = "DatabaseError";
    this.status = 500; // Internal Server Error
    Error.captureStackTrace?.(this, DatabaseError);
  }
}

export class InvalidInputError extends AppError {
  constructor(message: string, errorCode: string) {
    super(message, errorCode);
    this.name = "InvalidInputError";
    this.status = 400; // Bad Request
    Error.captureStackTrace?.(this, InvalidInputError);
  }
}

export class NotFoundError extends AppError {
  constructor(message: string, errorCode: string) {
    super(message, errorCode);
    this.name = "NotFoundError";
    this.status = 404; // Not Found
    Error.captureStackTrace?.(this, NotFoundError);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message: string, errorCode: string) {
    super(message, errorCode);
    this.name = "UnauthorizedError";
    this.status = 401; // Unauthorized
    Error.captureStackTrace?.(this, UnauthorizedError);
  }
}

export function propagateError(err: unknown): never {
  if (err instanceof AppError) {
    throw err;
  }
  if (err instanceof Error) {
    throw new AppError(err.message, "UNEXPECTED_ERROR");
  }
  throw new AppError("Unknown error occurred", "UNKNOWN_ERROR");
}

export function validateInput<T extends TSchema>(
  schema: T,
  value: unknown,
  errorCode = "INVALID_INPUT",
): asserts value is Static<T> {
  const C = TypeCompiler.Compile(schema);
  const result = C.Check(value);
  if (!result) {
    const errors = [...C.Errors(value)].map((e) => e.message).join("; ");
    throw new InvalidInputError(
      `Input validation failed: ${errors}`,
      errorCode,
    );
  }
}
