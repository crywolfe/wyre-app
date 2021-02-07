// Import path module
// import path from 'path';

// Get the location of database.sqlite file
// const dbPath = path.resolve(__dirname, './database/wyre.db')
// const dbPath = path.resolve('./database/wyre.sqlite3')

// Create connection to SQLite database
const knex: any = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './database/wyre.sqlite3',
  },
  useNullAsDefault: true
})

// Create a table in the database called "invoices"
knex.schema.hasTable('invoices')
    .then((exists: any) => {
      if (!exists) {
        return knex.schema.createTable('invoices', (table: any) => {
          table.increments('id').primary()
          table.string('currencyAddress')
          table.string('status')
        })
        .then(() => {
          console.log('Success: Table \'Invoices\' created')
        })
        .catch((error: any) => {
          console.error(`There was an error creating table: ${error}`)
        })
      }
    })
    .then(() => {
      console.log('Finished')
    })
    .catch((error: any) => {
      console.error(`There was an error setting up the database: ${error}`)
    })

// Debugging purposes:
// Log all data in "invoices" table
knex.select('*').from('invoices')
  .then((data: any) => console.log('data:', data))
  .catch((err: any) => console.log(err))

// Export the database
export default knex;