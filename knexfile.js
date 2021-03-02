module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "7l3t6xAV65zrIthR*vKa",
      database: "bulk_schema"
    },
    pool: {
      min: 1,
      max: 1
    },
    migrations: {
      directory: "./src/db/migrations"
    }
  },
  production: {
    client: "mysql",
    connection: {
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
    },
    pool: {
      min: 1,
      max: 1
    },
    migrations: {
      directory: "./src/db/migrations"
    }
  }
};
