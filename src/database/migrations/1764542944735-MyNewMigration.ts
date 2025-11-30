import { MigrationInterface, QueryRunner } from "typeorm";

export class MyNewMigration1764542944735 implements MigrationInterface {
    name = 'MyNewMigration1764542944735'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" int NOT NULL IDENTITY(1,1), "firstName" nvarchar(150) NOT NULL, "lastName" nvarchar(150) NOT NULL, "email" nvarchar(255) NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
