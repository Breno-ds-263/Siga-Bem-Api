import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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

@Entity('USERS')
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'NAME' })
  name: string;

  @Column({ unique: true, name: 'CPF' })
  cpf: string;

  @Column({ name: 'AGE' })
  age: number;

  @Column({ name: 'GENDER' })
  Gender: GENDER;

  @Column({ name: 'DEFICIENCY' })
  DEFICIENCY: DEFICIENCY;

  @Column({ name: 'TYPEUSER' })
  TypeUser: TYPEUSER;
}
