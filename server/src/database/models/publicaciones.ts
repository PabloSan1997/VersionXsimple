/* eslint-disable no-mixed-spaces-and-tabs */
import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne} from 'typeorm';
import { Users } from './users';

@Entity()
export class Publicaciones{
    @PrimaryGeneratedColumn('uuid')
    	id_pueblic:string;

    @Column()
    	message:string;

    @CreateDateColumn({type:'timestamp'})
    	fecha:Date;

    @UpdateDateColumn({type:'timestamp'})
    	fecha_actual:Date;

    
    @ManyToOne(()=>Users, (users)=>users.id_user)
    	users:Users;
}