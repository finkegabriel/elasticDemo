module.exports = {
  development: {
    client: 'postgresql', 
    connection: process.env.DATABASE_URL || 'postgres://postgres@someIPorDNS_ADDRESS/DATABASEnSTUFF',
    pool: {
      min: 1,
      max: 7,
    },
  }
};