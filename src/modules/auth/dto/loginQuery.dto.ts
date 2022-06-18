import { IsNumber, IsString } from 'class-validator'

export class LoginQueryDto {
  @IsNumber()
  studentId: number

  @IsString()
  password: string
}
