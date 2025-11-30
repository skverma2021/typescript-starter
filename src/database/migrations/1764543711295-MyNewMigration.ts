import { MigrationInterface, QueryRunner } from "typeorm";

export class MyNewMigration1764543711295 implements MigrationInterface {
    name = 'MyNewMigration1764543711295'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "age" int`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "age"`);
    }

}
