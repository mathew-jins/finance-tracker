import { Component, inject } from '@angular/core';
import { TransactionService } from '../../services/transaction-service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-dasboard',
  imports: [CurrencyPipe],
  templateUrl: './dasboard.html',
  styleUrl: './dasboard.scss',
})
export class Dasboard {

  transactionService= inject(TransactionService);

}
