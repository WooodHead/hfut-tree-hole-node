import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm'
import { UserEntity } from '../../user/entities/user.entity'

@Entity('todo_list')
export class TodoEntity {
  @PrimaryColumn()
  id: string

  @Column()
  title: string

  @Column({
    comment: '事件详细描述文本',
  })
  desc: string

  @Column({
    comment: '事件颜色',
  })
  textColor: string

  @Column({
    comment: 'event开始时间',
  })
  startTime: Date

  @Column({
    comment: 'event结束的时间',
  })
  endTime: Date

  @ManyToOne(type => UserEntity, user => user.todolist)
  user: UserEntity
}
