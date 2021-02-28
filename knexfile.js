module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: process.env.LOCAL_DATABASE_HOST,
      user: process.env.LOCAL_DATABASE_USER,
      password: process.env.LOCAL_DATABASE_PASSWORD,
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
