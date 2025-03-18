import express from 'express'
import 'dotenv/config'
import { dbConnection } from './data/dbConnection.js';
import { createHandler } from 'graphql-http/lib/use/http';
import { schema } from './graphQl/schema.js';

const app = express();
const port = process.env.SERVER_PORT;

app.all('/graphQL', createHandler({schema}));

app.listen(port, () => console.log(`Server listening on port ${port}!`));