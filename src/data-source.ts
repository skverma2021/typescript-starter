import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm'; // Import DataSourceOptions
import rawConfig from '../ormconfig'; // Rename import to avoid confusion

// The AppDataSource constructor requires the 'type' property to be present.
// We assert the imported config as DataSourceOptions to satisfy TypeScript.
export const AppDataSource = new DataSource(rawConfig as DataSourceOptions);

// export default AppDataSource;