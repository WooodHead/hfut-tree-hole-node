import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { TodoEntity } from '../../todo/entities/todo.entity'

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    studentId: number

  @Column()
    password: string

  @Column()
    username: string

  @Column()
    email: string

  @Column({
    default: 'http://p3.music.126.net/F3sugpmX0WXG0lZkqVkG2g==/109951166049791621.jpg?param=200y200',
  })
    avatar: string

  @Column({
    name: 'last_login_ip',
    comment: '最后一次登录的ip',
  })
    ip: string

  @UpdateDateColumn({
    name: 'last_login_time',
    comment: '最后一次登录时间',
  })
    lastLoginTime: number

  @UpdateDateColumn({
    name: 'last_update_time',
    comment: '最后一次更新时间',
  })
    lastUpdateTime: number

  @CreateDateColumn({
    name: 'register_time',
    comment: '注册时间',
  })
    registerTime: number

  @OneToMany(type => TodoEntity, todo => todo.user)
    todolist: TodoEntity[]
}
