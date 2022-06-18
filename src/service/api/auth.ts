import { LoginQueryDto } from '../../modules/auth/dto/loginQuery.dto'
import { request } from '../base'
import { requestConfig } from '../../shared/config/request.config'
import { RegisterQueryDto } from '../../modules/auth/dto/registerQuery.dto'

export const loginRequest = (dto: LoginQueryDto | RegisterQueryDto) => {
  const url = requestConfig.loginUrl
  return request({
    url,
    params: {
      username: dto.studentId,
      password: dto.password,
    },
  })
}
