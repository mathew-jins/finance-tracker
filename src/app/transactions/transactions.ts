import { Component } from '@angular/core';
import { AddTransaction } from '../components/add-transaction/add-transaction';
import { ListTransactions } from "../components/list-transactions/list-transactions";

@Component({
  selector: 'app-transactions',
  imports: [ AddTransaction, ListTransactions],
  templateUrl: './transactions.html',
  styleUrl: './transactions.scss',
})
export class Transactions {
}
