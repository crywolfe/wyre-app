import React from 'react';
import { InvoiceRow } from './invoice-row';
import './../styles/invoice-list.css';

// Create interfaces
interface InvoiceUI {
  id: number;
  currencyAddress: string;
  status: string;
}

interface InvoiceListUI {
  invoices: InvoiceUI[];
  loading: boolean;
}

// Create InvoiceList component
export const InvoiceList = (props: InvoiceListUI) => {
  // Show loading message
  if (props.loading) return <p>Invoices table is loading...</p>

  return (
    <table className="table">
        <thead>
          <tr>
            <th className="table-head-item" />
            <th className="table-head-item">Currency Address</th>
            <th className="table-head-item">Status</th>
            <th className="table-head-item" />
          </tr>
        </thead>

        <tbody className="table-body">
          {props.invoices.length > 0 ? (
            props.invoices.map((invoice: InvoiceUI, idx) => (
              <InvoiceRow
                key={invoice.id}
                invoice={invoice}
                position={idx + 1}
              />
              )
            )
          ) : (
            <tr className="table-row">
              <td className="table-item" style={{ textAlign: 'center' }} colSpan={6}>There are no invoices to show. Create one.</td>
            </tr>
          )
        }
        </tbody>
    </table>
  )
}
