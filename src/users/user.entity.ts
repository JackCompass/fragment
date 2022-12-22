import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn() id;
  @Column({ type: 'varchar', unique: true }) username;
  @Column({ type: 'varchar' }) password;
  @Column({ type: 'varchar' }) full_name;
  @Column({ type: 'varchar' }) display_name;
  @Column({ type: 'varchar', nullable: true }) avatar;
  @Column({ type: 'simple-array', default: [] }) friends_list;
  @Column({ type: 'timestamp', nullable: true }) last_seen_at;
}
