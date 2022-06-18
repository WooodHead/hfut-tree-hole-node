import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common'
import { Observable } from 'rxjs'
import { UAParser } from 'ua-parser-js'
import { CORSConfig } from '../../config/request.config'

@Injectable()
export class CrossDomainDefenseGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest()

    // const validate = validateGuard(request)
    //
    // if (!validate) {
    //   throw new ForbiddenException({ msg: '( ╯#-_-)╯┴—┴, 服务器禁止访问这个接口了哎' })
    // }

    return true
  }
}

// TODO add guards
const validateFns = []

function validateGuard(request: any) {
  const headers = request.headers

  for (let fn of validateFns) {
    const res = fn(headers)
    if (!res) {
      return false
    }
  }

  return true
}

function validateUA(headers: any) {
  const parser = new UAParser(headers['user-agent'])
  const ua = parser.getResult()
  for (let key in ua) {
    const item = ua[key]
    if (key !== 'device') {
      for (let prop in item) {
        if (typeof item[prop] === 'undefined') {
          return false
        }
      }
    }
  }

  return true
}

function validateOrigin(headers: any) {
  const origin = headers.origin
  let flag = false

  CORSConfig.allows.forEach((url) => {
    if (origin === url) {
      flag = true
    }
  })

  return flag
}
