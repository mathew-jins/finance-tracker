import { Transaction } from "../models/transaction.model";

export const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: 1,
    title: 'Monthly Salary',
    amount: 3500,
    category: 'Income',
    date: new Date('2026-01-01')
  },
  {
    id: 2,
    title: 'Grocery Store',
    amount: -120.50,
    category: 'Expense',
    date: new Date('2026-01-02')
  },
  {
    id: 3,
    title: 'Netflix Subscription',
    amount: -15.99,
    category: 'Expense',
    date: new Date('2026-01-02')
  },
  {
    id: 4,
    title: 'Freelance Web Design',
    amount: 800,
    category: 'Income',
    date: new Date('2026-01-03')
  },
  {
    id: 5,
    title: 'Stock Dividends',
    amount: 45.20,
    category: 'Investment',
    date: new Date('2026-01-03')
  },
  {
    id: 6,
    title: 'Gas Station',
    amount: -60.00,
    category: 'Expense',
    date: new Date('2026-01-04')
  },
  {
    id: 7,
    title: 'Rent Payment',
    amount: -1200,
    category: 'Expense',
    date: new Date('2026-01-05')
  }
];