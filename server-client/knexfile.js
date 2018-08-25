
module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || { user: 'postgres', password: 'pass', database: 'matts_store' }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
};
