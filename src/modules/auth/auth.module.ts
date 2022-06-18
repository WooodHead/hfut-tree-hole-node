import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { UserEntity } from '../user/entities/user.entity'
import { LoggerModule } from '../logger/logger.module'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { ExpireIn, JwtKey } from './auth.constants'
import { JwtStrategy } from './jwt.strategy'

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    PassportModule,
    JwtModule.register({
      secret: JwtKey,
      signOptions: { expiresIn: ExpireIn },
    }),
    LoggerModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStrategy,
  ],
})
export class AuthModule {}
