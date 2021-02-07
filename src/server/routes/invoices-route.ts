import express from 'express'
import {invoicesAll, invoiceCreate} from '../controllers/invoices-controller'

const invoicesRouter = express.Router();

invoicesRouter.get('/all', invoicesAll);

invoicesRouter.post('/create', invoiceCreate);

export default invoicesRouter;