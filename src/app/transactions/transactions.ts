import { Component, inject } from '@angular/core';
import { TransactionService } from '../services/transaction-service';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { AddTransaction } from '../components/add-transaction/add-transaction';

@Component({
  selector: 'app-transactions',
  imports: [CurrencyPipe, DatePipe, AddTransaction],
  templateUrl: './transactions.html',
  styleUrl: './transactions.scss',
})
export class Transactions {
  transactionService = inject(TransactionService);
}
