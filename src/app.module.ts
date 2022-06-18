import { Module } from '@nestjs/common'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'

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
  imports: [TypeOrmModule.forRoot(typeOrmModuleConfig)],
  controllers: [],
  providers: [],
})
export class AppModule {}
