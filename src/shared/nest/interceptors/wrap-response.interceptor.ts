import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { Observable, catchError, map, throwError } from 'rxjs'

@Injectable()
export class WrapResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle()
      .pipe(
        catchError(err => throwError(err)),
        map((data) => {
          if (typeof data === 'string') {
            return { data: { msg: data } }
          }
          return { data }
        }),
      )
  }
}
