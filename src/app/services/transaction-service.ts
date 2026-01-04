import { computed, Injectable, signal } from '@angular/core';
import { Transaction } from '../models/transaction.model';
import { MOCK_TRANSACTIONS } from '../mocks/transaction-data';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private readonly STORAGE_KEY = 'transactions';
  private transactionSignal = signal<Transaction[]>(this.loadTransactions());

  transactions = this.transactionSignal.asReadonly();

  totalBalance = computed(() => {
    return this.transactionSignal().reduce((acc, transaction) => acc + transaction.amount, 0);
  });

  totalIncome = computed(() => {
    return this.transactionSignal().filter(t => t.category === 'Income')
      .reduce((acc, transaction) => acc + transaction.amount, 0);
  });

  totalExpense = computed(() => {
    return this.transactionSignal().filter(t => t.category === 'Expense')
      .reduce((acc, transaction) => acc + transaction.amount, 0);
  });

  totalInvestment = computed(() => {
    return this.transactionSignal().filter(t => t.category === 'Investment')
      .reduce((acc, transaction) => acc + transaction.amount, 0);
  });

  addTransaction(transaction: Omit<Transaction, 'id'>) {
    const newTransaction: Transaction = {
      ...transaction,
      id: Date.now(), // Simple ID generation
    };
    this.transactionSignal.update((transactions) => {
      const updated = [newTransaction, ...transactions];
      this.saveTransactions(updated);
      return updated;
    });
  }

  private loadTransactions(): Transaction[] {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored, (key, value) => {
        return key === 'date' ? new Date(value) : value;
      });
    }
    return MOCK_TRANSACTIONS;
  }

  private saveTransactions(transactions: Transaction[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(transactions));
  }
}
