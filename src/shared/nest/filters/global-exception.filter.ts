import type { ArgumentsHost, ExceptionFilter } from '@nestjs/common'
import { Catch, HttpException, NotAcceptableException } from '@nestjs/common'

@Catch(HttpException, NotAcceptableException)
export class GlobalExceptionFilter<T extends HttpException> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()

    const status = exception.getStatus()
    const exceptionResponse = exception.getResponse() as any

    let error: any = { msg: exceptionResponse }

    if (typeof exceptionResponse !== 'string') {
      error = {
        statusCode: exceptionResponse.statusCode,
        msg: exceptionResponse.message,
        error: exceptionResponse.error,
      }
    }

    response.status(status).json({
      ...error,
    })
  }
}
