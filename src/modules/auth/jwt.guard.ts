import { CanActivate, ExecutionContext, Inject, Injectable } from '@nestjs/common'
import { Observable } from 'rxjs'
import { AuthGuard } from '@nestjs/passport'
import { JwtStrategy } from './jwt.strategy'

@Injectable()
export class JwtGuard extends AuthGuard('jwt') implements CanActivate {
  @Inject()
  private readonly jwtStrategy: JwtStrategy

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const headers = context.switchToHttp().getRequest().headers

    this.jwtStrategy.validate(headers)

    return true
  }
}
