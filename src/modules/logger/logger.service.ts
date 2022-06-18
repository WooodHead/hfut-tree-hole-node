import * as winston from 'winston'
import 'winston-daily-rotate-file'
import { Injectable } from '@nestjs/common'
const { format } = winston

@Injectable()
export class LoggerService {
  logger: winston.Logger
  constructor() {
    const colors = {
      info: 'red',
    }
    this.logger = winston.createLogger({
      format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`),
        format.colorize({
          colors,
        }),
      ),
      transports: [
        new winston.transports.Console(),
        new winston.transports.DailyRotateFile({
          filename: 'logs/%DATE%/info-%DATE%.log',
          level: 'info',
        }),
        new winston.transports.DailyRotateFile({
          filename: 'logs/%DATE%/error-%DATE%.log',
          level: 'error',
        }),
        new winston.transports.DailyRotateFile({
          filename: 'logs/%DATE%/error-%DATE%.log',
          level: 'warn',
        }),
      ],
    })
  }

  info(message: string) {
    this.logger.info(message)
  }

  error(message: string) {
    console.error(message)
  }

  warn(message: string) {
    console.warn(message)
  }

  debug(message: string) {
    this.logger.debug(message)
  }

  log(message: any, ...optionalParams: any[]): any {
    this.logger.info(message)
  }

  setLogLevels(levels): any {
  }

  verbose(message: any, ...optionalParams: any[]): any {
  }
}
