import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { Usuario } from './entities/usuario.entity'; // Sua entidade
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // ESSA LINHA É A CHAVE:
    TypeOrmModule.forFeature([Usuario]),
  ],
  controllers: [UsuarioController],
  providers: [UsuarioService],
})
export class UsuarioModule {}
