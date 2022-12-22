import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Conversation {
  @PrimaryGeneratedColumn() id: number;
  @Column() sender_id: number;
  @Column() receiver_id: number;
  @Column() text: string;
}
