const mysqlConfig = {
  type: 'mysql',
  host: 'localhost',
  port: '3306',
  database: 'todo',
  username: 'root',
  password: '1234',
};

export default {
  ...mysqlConfig,
  synchronize: true,
  logging: true,
  // migrations: ['src/migration/**/*.ts'],
  supportBigNumbers: true,
  bigNumberStrings: false,
};
