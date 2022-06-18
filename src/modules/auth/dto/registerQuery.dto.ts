import { IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from 'class-validator'

export class RegisterQueryDto {
  @IsNumber()
  studentId: number

  @IsNotEmpty()
  @IsString()
  password: string

  @MaxLength(30, {
    message: '邮箱最大长度为30个字符',
  })
  @IsEmail()
  email: string

  @MaxLength(15, {
    message: '用户名最大长度为15个字符',
  })
  @MinLength(1, {
    message: '用户名最小长度为1个字符',
  })
  username: string
}
