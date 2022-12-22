import { MigrationInterface, QueryRunner } from "typeorm";

export class UserMigrationUpdate1671736885332 implements MigrationInterface {
    name = 'UserMigrationUpdate1671736885332'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "friends_list"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "friends_list" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "last_seen_at"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "last_seen_at" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "last_seen_at"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "last_seen_at" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "friends_list"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "friends_list" character varying NOT NULL`);
    }

}
