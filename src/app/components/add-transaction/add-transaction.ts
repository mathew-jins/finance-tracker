import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AddTransactionDialogComponent } from '../add-transaction-dialog/add-transaction-dialog';
import { TransactionService } from '../../services/transaction-service';
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-add-transaction',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './add-transaction.html',
  styleUrl: './add-transaction.scss',
})
export class AddTransaction {
  readonly dialog = inject(MatDialog);
  readonly transactionService = inject(TransactionService);

  openAddTransactionDialog() {
    const dialogRef = this.dialog.open(AddTransactionDialogComponent);

    dialogRef.afterClosed().subscribe((result: Omit<Transaction, 'id'> | undefined) => {
      if (result) {
        this.transactionService.addTransaction(result);
      }
    });
  }
}
