import { computed, Injectable, signal } from '@angular/core';
import { Transaction } from '../models/transaction.model';
import { MOCK_TRANSACTIONS } from '../mocks/transaction-data';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transactionSignal= signal<Transaction[]>(MOCK_TRANSACTIONS);

  transactions = this.transactionSignal.asReadonly();

  totalBalance= computed(() => {
    return this.transactionSignal().reduce((acc, transaction) => acc + transaction.amount, 0);
  });

  totalIncome= computed(() => {
    return this.transactionSignal().filter(t => t.category === 'Income')
      .reduce((acc, transaction) => acc + transaction.amount, 0);
  });

  totalExpense= computed(() => {
    return this.transactionSignal().filter(t => t.category === 'Expense')
      .reduce((acc, transaction) => acc + transaction.amount, 0);
  });

  totalInvestment= computed(() => {
    return this.transactionSignal().filter(t => t.category === 'Investment')
      .reduce((acc, transaction) => acc + transaction.amount, 0);
  });

}
