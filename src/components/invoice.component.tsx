import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { InvoiceList } from './invoice-list';
import './../styles/invoice.css';

export const Invoice = () => {
  // Prepare states
  const [currencyAddress, setCurrencyAddress] = useState('')
  const [status, setStatus] = useState('')
  const [invoices, setInvoices] = useState([])
  const [loading, setLoading] = useState(true)

  // Fetch all invoices on initial render
  useEffect(() => {
    fetchInvoices()
  }, [])

  // Fetch all invoices
  const fetchInvoices = async () => {
    axios.get('http://localhost:4001/invoices/all')
      .then(response => {
        // Update the invoice state
        setInvoices(response.data);

        // Update loading state
        setLoading(false);
      })
      .catch(error => console.error(`There was an error retrieving the invoice list: ${error}`))
  }

  // Reset all input fields
  const handleInputsReset = () => {
    setCurrencyAddress('')
    setStatus('')
  }

  // Create new invoice
  const handleInvoiceCreate = () => {
    axios
      .post('http://localhost:4001/invoices/create', {
        currencyAddress,
        status
      })
      .then(res => {
        console.log(res.data);
        fetchInvoices();
      })
      .catch(error => console.error(`There was an error creating the ${currencyAddress} invoice: ${error}`))
  }

  // Submit new invoice
  const handleInvoiceSubmit = () => {
    // Check if all fields are filled
    if (currencyAddress && currencyAddress.length > 0 && status && status.length > 0) {
      // Create new invoice
      handleInvoiceCreate()

      console.info(`currency address ${currencyAddress} added.`)

      // Reset all input fields
      handleInputsReset()
    }
  }

  return (
    <div className="invoice-list-wrapper">
      {/* Form for creating new invoice */}
      <div className="invoice-list-form">
        <div className="form-wrapper" onSubmit={handleInvoiceSubmit}>
          <div className="form-row">
            <fieldset>
              <label className="form-label" htmlFor="currencyAddress">Enter currency address:</label>
              <input className="form-input" type="text" id="currencyAddress" name="ticurrencyAddresstle" value={currencyAddress} onChange={(e) => setCurrencyAddress(e.currentTarget.value)} />
            </fieldset>

            <fieldset>
              <label className="form-label" htmlFor="status">Enter status:</label>
              <input className="form-input" type="text" id="status" name="status" value={status} onChange={(e) => setStatus(e.currentTarget.value)} />
            </fieldset>
          </div>
        </div>

        <button onClick={handleInvoiceSubmit} className="btn btn-add">Add the invoice</button>
      </div>

      <InvoiceList invoices={invoices} loading={loading} />

    </div>
  )
}
