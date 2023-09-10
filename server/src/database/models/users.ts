/* eslint-disable no-mixed-spaces-and-tabs */
import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { Publicaciones } from './publicaciones';

@Entity()
export class Users{
    @PrimaryGeneratedColumn('uuid')
    	id_user:string;

    @Column()
    	name:string;

    @Column({unique:true})
    	email:string;

    @Column()
    	password:string;

    @OneToMany(()=>Publicaciones, (publicaciones)=>publicaciones.users)
    	publicaciones:Publicaciones[];

}