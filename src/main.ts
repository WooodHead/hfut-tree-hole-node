import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { GlobalExceptionFilter } from './shared/nest/filters/global-exception.filter'
import { WrapResponseInterceptor } from './shared/nest/interceptors/wrap-response.interceptor'
import { CrossDomainDefenseGuard } from './shared/nest/guard/cross-domain-defense.guard'
import { LoggerService } from './modules/logger/logger.service'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new LoggerService(),
  })

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  )

  app.useGlobalGuards(new CrossDomainDefenseGuard())
  app.useGlobalFilters(new GlobalExceptionFilter())
  app.useGlobalInterceptors(new WrapResponseInterceptor())

  await app.listen(8000)
}
bootstrap()
