import { DataSourceOptions } from 'typeorm'; 
// Entities are imported for local type checking, but are specified by glob path below

const config: DataSourceOptions = { // Ensure this uses DataSourceOptions
  type: 'mssql', // 'mssql' is required
  host: 'localhost',
  port: 1433,
  username: 'udemy',
  password: 'theUdemyUser',
  database: 'test',
  synchronize: false,
  logging: true,
  
  // Use glob patterns for the CLI to find entities
  entities: [
    'dist/**/*.entity.js', // For production/build environment
    'src/**/*.entity.ts',  // For local development/migrations
  ],
  
  // Migration files
  migrations: [
    'src/database/migrations/*.ts', 
  ],
  
  extra: {
    trustServerCertificate: true,
  }
};

export default config;