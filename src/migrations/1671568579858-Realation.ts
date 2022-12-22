import { MigrationInterface, QueryRunner } from "typeorm";

export class Realation1671568579858 implements MigrationInterface {
    name = 'Realation1671568579858'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "phone" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "relationship" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "relationship"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phone"`);
    }

}
