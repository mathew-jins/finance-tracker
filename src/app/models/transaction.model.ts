export type Transaction ={
    id: number;
    title: string;
    amount: number;
    category: 'Income' | 'Expense'| 'Investment';
    date: Date;
}