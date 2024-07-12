class ApiError extends Error {
    constructor(
      status,
      message = "Internal Server Error",
      errors = [],
      statC = ""
    ) {
      super(message);
      this.status = status;
      this.message = message;
      this.errors = errors;
      this.statC = statC;
      this.success = false;
  
      if (stack) {
        this.stack = this.stack;
      } else {
        Error.captureStackTrace(this, this.constructor);
      }
    }
  }
  
  export default ApiError;
  
  