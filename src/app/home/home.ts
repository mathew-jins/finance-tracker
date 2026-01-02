import { Component, inject } from '@angular/core';
import { TransactionService } from '../services/transaction-service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CurrencyPipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  
  transactionService= inject(TransactionService);


}
