import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

    @Column()
  email: string;
  
  @Column()
  password: string;

  @Column()
  tel: number;
  
  @Column()
  ddi: string;
  
  @Column()
  privacy: string;
  
  @Column()
  newsletter: string;

}