import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() // This maps the class to a table named 'user' (by default)
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'nvarchar', length: 150 }) // Using nvarchar for string types in MSSQL
  firstName: string;

  @Column({ type: 'nvarchar', length: 150 })
  lastName: string;

  @Column({ unique: true }) // Ensures emails are unique
  email: string;
  
  @Column({ nullable: true })
age: number;
}