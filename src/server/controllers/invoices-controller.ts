// Import database
import knex from '../db-config';

export const invoicesAll = async (req: any, res: any) => {
  knex
    .select('*')
    .from('invoices')
    .then((invoiceData: any) => {
      res.json(invoiceData)
    })
    .catch((err: any) => {
      res.json({ message: `There was an error retrieving invoices: ${err}` })
    })
}

export const invoiceCreate = async (req: any, res: any) => {
  knex('invoices')
    .insert({
      'currencyAddress': req.body.currencyAddress,
      'status': req.body.status
    })
    .then(() => {
      res.json({ message: `Invoice \'${req.body.currencyAddress}\' by ${req.body.status} created.` })
    })
    .catch((err: any) => {
      res.json({ message: `There was an error creating ${req.body.currencyAddress} invoice: ${err}` })
    })
}

