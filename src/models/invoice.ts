import { InvoiceEnum } from "./invoice-enum";
export interface Invoice {
    id: string;
    currencyAddress: string;
    status: InvoiceEnum;
}