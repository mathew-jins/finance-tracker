import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from '../models/transaction.model';

@Pipe({
  name: 'categoryFilter',
  standalone: true
})
export class CategoryFilterPipe implements PipeTransform {

  transform(transactions: Transaction[], category: string): Transaction[] {
    if (!transactions || !category || category === 'All') {
      return transactions;
    }
    return transactions.filter(t => t.category === category);
  }

}
