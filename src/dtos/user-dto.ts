import { IsNotEmpty, Length } from 'class-validator';

export class UserDto {
  @IsNotEmpty({
    message: 'Email é obrigatório',
  })
  email: string;
  @IsNotEmpty({
    message: 'Nome é obrigatório',
  })
  name: string;
  @IsNotEmpty({
    message: 'Senha é obrigatória',
  })
  @Length(6, 20, {
    message: 'A senha deve ter no mínimo 6 caracteres',
  })
  password: string;
}
