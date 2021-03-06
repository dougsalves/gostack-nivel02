import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAppointments1600132323495 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        new Table({
            name: 'appointments',
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true,
                    generationStrategy: "uuid"
                },
                {
                    name: "provider",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "date",
                    type: "timestamp with time zone",
                    isNullable: false
                }
            ]
        })
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('appointments')
    }

}
