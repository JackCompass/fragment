import { MigrationInterface, QueryRunner } from "typeorm";

export class Conversation1671733176987 implements MigrationInterface {
    name = 'Conversation1671733176987'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "conversation" ("id" SERIAL NOT NULL, "sender_id" integer NOT NULL, "receiver_id" integer NOT NULL, "text" character varying NOT NULL, CONSTRAINT "PK_864528ec4274360a40f66c29845" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "conversation"`);
    }

}
