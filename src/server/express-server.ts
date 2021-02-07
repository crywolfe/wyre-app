// Import dependencies
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import * as dotenv from 'dotenv';
import invoiceRouter from './routes/invoices-route';

dotenv.config();

if (!process.env.PORT) {
    console.log(`Error to get ports`);
    process.exit(1);
}

// Set default port for express app
const PORT: number = parseInt(process.env.PORT as string, 10);

// Create express app
const app = express()

// Apply middleware
// Note: Keep this at the top, above routes
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Implement invoice route
app.use('/invoices', invoiceRouter)

// Implement 500 error route
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack)
  res.status(500).send('Something is broken.')
})

// Implement 404 error route
app.use((req: any, res: any, next: any) => {
  res.status(404).send('Unable to find.')
})

// Start express app
app.listen(PORT, () => {
  console.log(`Server is running on: ${PORT}`)
})