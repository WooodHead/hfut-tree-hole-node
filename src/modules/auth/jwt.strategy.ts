import { PassportStrategy } from '@nestjs/passport'
import { Passport } from 'passport'
import { ExtractJwt } from 'passport-jwt'
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { JwtKey } from './auth.constants'
import { AuthService } from './auth.service'

@Injectable()
export class JwtStrategy extends PassportStrategy(Passport, 'jwt') {
  @Inject()
  private readonly authService: AuthService

  @Inject()
  private readonly jwtService: JwtService

  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: JwtKey,
    })
  }

  validate(payload: any) {
    const token = payload.authorization
    const throwException = () => {
      throw new UnauthorizedException('没有通过权限验证哦')
    }
    if (!token) {
      throwException()
    }

    try {
      const verify = this.jwtService.verify(token)
    } catch (err) {
      console.log(err)
      throwException()
    }
    return payload
  }
}
