import { Exclude } from 'class-transformer';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

export enum TYPEUSER {
  ADMIN = 'ADMIN',
  VIEWER = 'VIEWER',
}

export enum DEFICIENCY {
  FISICA = 'FISICA',
  VISUAL = 'VISUAL',
  AUDITIVA = 'AUDITIVA',
  INTELECTUAL = 'INTELECTUAL',
  MULTIPLA = 'MULTIPLA',
}

export enum GENDER {
  MASCULINO = 'MASCULINO',
  FEMININO = 'FEMININO',
  OUTRO = 'OUTRO',
}

@Entity('users')
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, name: 'cpf' })
  cpf: string;

  @Column({ name: 'password' })
  @Exclude()
  password: string;

  @Column({ name: 'AGE' })
  age: number;

  @Column({ name: 'gender' })
  Gender: GENDER;

  @Column({ name: 'deficiency ' })
  DEFICIENCY: DEFICIENCY;

  @Column({ name: 'admin' })
  TypeUser: TYPEUSER;

  @CreateDateColumn({ name: 'CREATED_AT' })
  createdAt: Date;
}
