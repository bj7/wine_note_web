const { Client } = require('pg');
const {buildSchema} = require('graphql');

let client;
const connect = () => {
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
const setupSchema = () => {
	const schema = buildSchema(`
		type Note {
			wine: String
			vintage: Int
			price: Float
			region: String
			country: String
			varietal: String
			notes: String
			rating: Int
		}
		type Query {
			gethello: String
			getNotes: [Note]
		}
	`)
	const root = {
		gethello: () => {
			return "Hello World"
		},
		getNotes: () => {
			return client.query("SELECT * FROM notes")
				.then(res => res.rows) 
		}
	}
	return {root, schema}
}

const bootstrap = {
	connect,
	setupSchema
}
module.exports = bootstrap