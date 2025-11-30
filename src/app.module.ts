import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity'; // Import your entity

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost', // or your MSSQL host
      port: 1433,        // default MSSQL port
      username: 'udemy',    // your database username
      password: 'theUdemyUser', // your database password
      database: 'test', // the database name
      entities: [User], // List of all entities
      synchronize: false, // !!! IMPORTANT: Set to false in production. Migrations will handle schema updates.
      extra: {
        trustServerCertificate: true, // Needed if you're connecting locally without a trusted certificate
      }
    }),UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
