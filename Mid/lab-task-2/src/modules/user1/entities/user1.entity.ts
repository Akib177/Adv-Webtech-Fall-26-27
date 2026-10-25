import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name:"user1"})
export class User1 {
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