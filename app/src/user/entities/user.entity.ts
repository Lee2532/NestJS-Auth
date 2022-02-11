import * as bcrypt from 'bcryptjs';
import { Exclude } from 'class-transformer';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    idx: number;

    @Column({unique : true})
    username: string;

    @Column()
    nickname: string;

    @Column()
    @Exclude()
    password: string;

    @Column()
    auth: string;

    @CreateDateColumn()
    create_date: Date;

    @UpdateDateColumn()
    update_date: Date;

    constructor(data: Partial<User> = {}) {
        Object.assign(this, data);
    }

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword(): Promise<void> {
      const salt = await bcrypt.genSalt();
      if (!/^\$2a\$\d+\$/.test(this.password)) {
        this.password = await bcrypt.hash(this.password, salt);
      }
    }
  
    async checkPassword(plainPassword: string): Promise<boolean> {
      return await bcrypt.compare(plainPassword, this.password);
    }
    
}