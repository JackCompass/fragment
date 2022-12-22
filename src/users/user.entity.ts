import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn() id: number;
    @Column() username: string;
    @Column() password: string;
    @Column() full_name: string;
    @Column() display_name: string;
    @Column() phone: number;

    @Column() relationship: string;
    @Column() avatar: string;
    @Column() friends_list: string;
    @Column() last_seen_at: Date;
}