import {
  Injectable,
} from '@nestjs/common'
import { LoginQueryDto } from './dto/loginQuery.dto'
import { RegisterQueryDto } from './dto/registerQuery.dto'

export type AuthQueryDto = LoginQueryDto | RegisterQueryDto

@Injectable()
export class AuthService {

}
