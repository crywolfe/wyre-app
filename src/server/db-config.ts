import knex from 'knex';
import config from './db';

const db = knex(config);

export default db;