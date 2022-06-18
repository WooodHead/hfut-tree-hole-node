import { Module } from '@nestjs/common'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './modules/auth/auth.module'
import { UserModule } from './modules/user/user.module'
import { TodoModule } from './modules/todo/todo.module'
import { LoggerModule } from './modules/logger/logger.module'

const typeOrmModuleConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'hfut-tree-hole',
  autoLoadEntities: true,
  synchronize: true,
}

@Module({
  imports: [AuthModule, UserModule, TypeOrmModule.forRoot(typeOrmModuleConfig), TodoModule, LoggerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
