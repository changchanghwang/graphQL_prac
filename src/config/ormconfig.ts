const mysqlConfig = {
  type: 'mysql',
  host: 'localhost',
  port: '3306',
  database: 'todo',
  username: 'root',
};

export default {
  ...mysqlConfig,
  synchronize: false,
  logging: true,
  // migrations: ['src/migration/**/*.ts'],
  supportBigNumbers: true,
  bigNumberStrings: false,
};
