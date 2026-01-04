import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { TransactionService } from '../../services/transaction-service';
import { CategoryFilterPipe } from '../../pipes/category-filter.pipe';
import { CategoryColorDirective } from '../../directives/category-color.directive';

@Component({
  selector: 'app-list-transactions',
  imports: [CurrencyPipe, DatePipe, FormsModule, CategoryFilterPipe, MatFormFieldModule, MatSelectModule, CategoryColorDirective],
  templateUrl: './list-transactions.html',
  styleUrl: './list-transactions.scss',
})
export class ListTransactions {
  
  transactionService = inject(TransactionService);
  selectedCategory = signal('All');

}
