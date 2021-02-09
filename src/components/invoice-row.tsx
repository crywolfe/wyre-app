import React from 'react';

interface InvoiceRowUI {
  position: number;
  invoice: {
    id: number;
    currencyAddress: string;
    status: string;
  }
}

// Create InvoiceRow component
export const InvoiceRow = (props: InvoiceRowUI) => (
  <tr className="table-row">
    <td className="table-item">
      {props.position}
    </td>

    <td className="table-item">
      {props.invoice.currencyAddress}
    </td>

    <td className="table-item">
      {props.invoice.status}
    </td>
  </tr>
)
