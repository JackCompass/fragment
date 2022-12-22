import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserTable1671731837538 implements MigrationInterface {
  name = 'UserTable1671731837538';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "full_name" character varying NOT NULL, "display_name" character varying NOT NULL, "avatar" character varying NOT NULL, "friends_list" character varying NOT NULL, "last_seen_at" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
