import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Account extends Model {
  @Column
  name: string;

  @Column
  email: string;

  @Column
  tel: string;

  @Column
  ddi: string;

  @Column
  password: string;
  
  @Column
  privacy: string;
  
  @Column
  newsletter: string;
}