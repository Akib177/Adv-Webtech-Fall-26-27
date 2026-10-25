import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity({name:"user2"})
export class User2 {
    @PrimaryGeneratedColumn("uuid")
    id!:string;

    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @Column()
    created_at?: string;

    @Column()
    updated_at?: string;
}