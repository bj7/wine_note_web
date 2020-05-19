const { Client } = require('pg');

const connect = () => {
	let client;
	// heroku postgres specific
	if (process.env.DATABASE_URL) {
		client = new Client({
			connectionString: process.env.DATABASE_URL,
			ssl: {
				rejectUnauthorized: false
			}
		});
	} else { // just a local-only macOS postgres server
		client = new Client({
			user: '',
			host: 'localhost',
			database: 'local_heroku',
			password: '',
			port: '5432'
		})
	}
	// setup note db on first load
	client.connect()
	const createIfNotExists = `
	CREATE TABLE IF NOT EXISTS Notes (
		wine          text,
		vintage       integer,
		price         numeric(20, 2),
		region        text,
		country       text,
		varietal      text,
		notes         text,
		rating        integer
		)
		`;
	client.query(createIfNotExists, (err, res) => {
		// console.log(err, res)
		// client.end()
	})
	return client
}
module.exports = connect