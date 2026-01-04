import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-add-transaction-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
  ],
  templateUrl: './add-transaction-dialog.html',
  styleUrl: './add-transaction-dialog.scss',
})
export class AddTransactionDialogComponent {
  readonly dialogRef = inject(MatDialogRef<AddTransactionDialogComponent>);
  readonly fb = inject(FormBuilder);

  transactionForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    amount: [null, [Validators.required, Validators.min(0.01)]],
    category: ['Expense', Validators.required],
    date: [new Date(), Validators.required],
  });

  onSubmit() {
    if (this.transactionForm.valid) {
      this.dialogRef.close(this.transactionForm.value);
    }
  }
}
