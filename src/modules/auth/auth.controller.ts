import { Controller, Inject } from '@nestjs/common'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  @Inject()
  private readonly authService: AuthService
}
