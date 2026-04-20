import { IsEnum, IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { DEFICIENCY, GENDER, TYPEUSER } from '../entities/usuario.entity';

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty({ message: 'O nome não pode estar vazio' })
  name!: string;

  @IsNotEmpty({ message: 'O CPF não pode estar vazio' })
  cpf!: string;

  @IsNumber()
  @IsNotEmpty({ message: 'A idade não pode estar vazia' })
  age!: number;

  @IsEnum(GENDER, {
    message: 'O sexo deve ser MASCULINO, FEMININO ou OUTRO',
  })
  gender!: GENDER;

  @IsEnum(DEFICIENCY, {
    message: 'A deficiência deve ser VISUAL, AUDITIVA, INTELECTUAL ou MULTIPLA',
  })
  @IsNotEmpty({ message: 'A deficiência não pode estar vazia' })
  deficiency!: DEFICIENCY;

  @IsEnum(TYPEUSER, {
    message: 'O tipo de usuário deve ser ADMIN ou VIEWER',
  })
  @IsNotEmpty({ message: 'O tipo de usuário não pode estar vazio' })
  typeUser!: TYPEUSER;
}
