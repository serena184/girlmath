import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { BudgetService, Envelope, Transaction } from './budget.service';

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [CommonModule, MatIconModule, ReactiveFormsModule],
  template: `
    <div class="main-view">
      @if (budgetService.monthlyIncome() === null) {
        <div class="setup-container">
          <h1 style="font-size: 28px; margin-bottom: 8px; text-align: center;">Set Your Vibe</h1>
          <p style="text-align: center; color: var(--text-secondary); margin-bottom: 24px;">How much money are we working with this month, bestie?</p>
          
          <div class="card" style="display: flex; flex-direction: column; gap: 16px;">
            <div>
              <label class="form-label" for="incomeControl">Monthly Income / Budget</label>
              <div style="position: relative;">
                <span style="position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: var(--text-secondary); font-weight: 600;">€</span>
                <input type="number" id="incomeControl" [formControl]="incomeControl" class="input-field" style="padding-left: 32px;" placeholder="e.g. 2000">
              </div>
            </div>
            <div>
              <label class="form-label" for="renewDayControl">Budget Renewal Day</label>
              <input type="number" id="renewDayControl" [formControl]="renewDayControl" class="input-field" placeholder="e.g. 1 for 1st of month" min="1" max="31">
            </div>
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <label class="form-label" style="margin: 0;" for="autoSaveControl">Enable Auto Save</label>
              <button id="autoSaveControl" type="button" class="toggle" [class.on]="autoSaveControl.value" (click)="autoSaveControl.setValue(!autoSaveControl.value)" tabindex="0" (keyup.enter)="autoSaveControl.setValue(!autoSaveControl.value)"><span style="display: none;">Toggle Auto Save</span></button>
            </div>
            <button class="btn" style="width: 100%;" (click)="setIncome()" [disabled]="!incomeControl.value || !renewDayControl.value">Start Budgeting</button>
          </div>
        </div>
      } @else {
        <!-- Main Budget View -->
        <div>
            <h1 style="font-size: 28px; margin-bottom: 4px;">Monthly Vibe Check</h1>
            <p style="font-family: var(--font-serif); color: var(--text-secondary); margin: 0;">You have €{{ budgetService.leftToAllocate() | number:'1.0-2' }} left to allocate to your envelopes.</p>
        </div>

        <div class="card" style="background: var(--c-green); color: white; margin-top: 16px; margin-bottom: 16px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <div style="font-size: 12px; opacity: 0.8; text-transform: uppercase; letter-spacing: 1px;">Total Budget</div>
                    <div style="font-size: 28px; font-weight: 700; font-family: var(--font-serif);">€{{ budgetService.monthlyIncome()! + budgetService.totalPositive() | number:'1.0-2' }}</div>
                </div>
                <div style="text-align: right;">
                    <div style="font-size: 12px; opacity: 0.8; text-transform: uppercase; letter-spacing: 1px;">Total Spent</div>
                    <div style="font-size: 20px; font-weight: 600;">€{{ budgetService.totalSpent() | number:'1.0-2' }}</div>
                </div>
            </div>
            <div style="margin-top: 12px; display: flex; justify-content: space-between; align-items: center; font-size: 12px; opacity: 0.8;">
                <span>Renews on day {{ budgetService.renewDay() }}</span>
                <button style="background: rgba(255,255,255,0.2); border: none; color: white; padding: 4px 8px; border-radius: 4px; cursor: pointer;" (click)="forceRenew()">Force Renew</button>
            </div>
        </div>

        <div style="display: flex; gap: 8px; margin-bottom: 24px;">
            <button class="btn" style="flex: 1; display: flex; align-items: center; justify-content: center; gap: 4px; font-size: 13px;" (click)="showLogExpense.set(!showLogExpense())">
                <mat-icon style="font-size: 16px; width: 16px; height: 16px;">receipt_long</mat-icon> Log Expense/Income
            </button>
            <button class="btn btn-outline" style="flex: 1; display: flex; align-items: center; justify-content: center; gap: 4px; font-size: 13px; background: white; border: none; color: var(--c-green);" (click)="connectBank()">
                <mat-icon style="font-size: 16px; width: 16px; height: 16px;">account_balance</mat-icon> Connect Bank
            </button>
        </div>

        @if (showLogExpense()) {
            <div class="card" style="border: 2px solid var(--c-pink-pop); margin-bottom: 24px;">
                <h3 style="margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
                    Log an Expense or Income
                    <button style="background: none; border: none; cursor: pointer; color: var(--text-secondary);" (click)="showLogExpense.set(false)"><mat-icon>close</mat-icon></button>
                </h3>
                <form [formGroup]="expenseForm" (ngSubmit)="logExpense()" style="display: flex; flex-direction: column; gap: 16px;">
                    <div>
                        <label class="form-label" for="expenseAmount">Amount</label>
                        <div style="position: relative;">
                            <span style="position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: var(--text-secondary); font-weight: 600;">€</span>
                            <input type="number" id="expenseAmount" formControlName="amount" class="input-field" style="padding-left: 32px;" placeholder="0.00">
                        </div>
                    </div>
                    <div>
                        <label class="form-label" for="expenseName">What was it?</label>
                        <input type="text" id="expenseName" formControlName="name" class="input-field" placeholder="e.g. Iced Matcha or Sold clothes">
                    </div>
                    <div>
                        <label class="form-label" for="envelopeId">Which Envelope?</label>
                        <select id="envelopeId" formControlName="envelopeId" class="input-field" style="appearance: auto;">
                            <option value="">Select an envelope...</option>
                            @for (env of budgetService.envelopes(); track env.id) {
                                <option [value]="env.id">{{ env.name }} {{ env.isPositive ? '(Income)' : '(€' + (env.allocated - env.spent | number:'1.0-2') + ' left)' }}</option>
                            }
                        </select>
                    </div>
                    <button type="submit" class="btn" [disabled]="expenseForm.invalid">Save Transaction</button>
                </form>
            </div>
        }

        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 16px;">
            <h3 style="margin: 0;">Your Envelopes</h3>
            <button style="color: var(--c-pink-pop); background: none; border: none; font-size: 14px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 2px;" (click)="showAddEnvelope.set(!showAddEnvelope())">
                <mat-icon style="font-size: 16px; width: 16px; height: 16px;">add</mat-icon> Add
            </button>
        </div>

        @if (showAddEnvelope()) {
            <div class="card" style="background: var(--c-pink-light); margin-bottom: 16px;">
                <h3 style="margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
                    New Envelope
                    <button style="background: none; border: none; cursor: pointer; color: var(--text-secondary);" (click)="showAddEnvelope.set(false)"><mat-icon>close</mat-icon></button>
                </h3>
                <form [formGroup]="envelopeForm" (ngSubmit)="addEnvelope()" style="display: flex; flex-direction: column; gap: 16px;">
                    <div>
                        <label class="form-label" for="envName">Envelope Name</label>
                        <input type="text" id="envName" formControlName="name" class="input-field" placeholder="e.g. Groceries, Side Hustle">
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <input type="checkbox" formControlName="isPositive" id="isPositive">
                        <label for="isPositive" style="font-size: 14px;">This is an Income Envelope (Adds to budget)</label>
                    </div>
                    @if (!envelopeForm.value.isPositive) {
                        <div>
                            <label class="form-label" for="envAllocated">Allocated Amount (Max: €{{ budgetService.leftToAllocate() | number:'1.0-2' }})</label>
                            <div style="position: relative;">
                                <span style="position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: var(--text-secondary); font-weight: 600;">€</span>
                                <input type="number" id="envAllocated" formControlName="allocated" class="input-field" style="padding-left: 32px;" placeholder="0">
                            </div>
                        </div>
                    }
                    <button type="submit" class="btn" [disabled]="envelopeForm.invalid || (!envelopeForm.value.isPositive && envelopeForm.value.allocated! > budgetService.leftToAllocate())">Create Envelope</button>
                </form>
            </div>
        }

        <div class="card" style="display: flex; flex-direction: column; gap: 20px;">
            @if (budgetService.envelopes().length === 0) {
                <div style="text-align: center; color: var(--text-secondary); padding: 20px 0; font-size: 14px;">
                    No envelopes yet. Create one to start budgeting!
                </div>
            }
            @for (env of budgetService.envelopes(); track env.id) {
                <div>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 14px; font-family: var(--font-serif);">
                        <span style="display: flex; align-items: center; gap: 8px; font-weight: 600;">
                            <mat-icon [style.color]="env.color" style="font-size: 20px; width: 20px; height: 20px;">{{ env.icon }}</mat-icon>
                            {{ env.name }} {{ env.isPositive ? '(Income)' : '' }}
                        </span>
                        @if (env.isPositive) {
                            <span style="color: var(--c-green);">+€{{ env.spent | number:'1.0-2' }}</span>
                        } @else {
                            <span>€{{ env.spent | number:'1.0-2' }} / €{{ env.allocated | number:'1.0-2' }}</span>
                        }
                    </div>
                    @if (!env.isPositive) {
                        <div style="height: 12px; background: var(--c-cream-dark); border-radius: var(--radius-pill); overflow: hidden;">
                            <div style="height: 100%; border-radius: var(--radius-pill); transition: width 0.3s ease;" 
                                 [style.width.%]="getProgressBarWidth(env.spent, env.allocated)"
                                 [style.background]="(env.spent / env.allocated) > 0.9 ? '#E53E3E' : env.color"></div>
                        </div>
                    }
                </div>
            }
        </div>

        <div style="margin-top: 32px;">
            <h3 style="margin-bottom: var(--space-md);">Recent Transactions</h3>
            <div class="budget-list">
                @if (budgetService.transactions().length === 0) {
                    <div style="text-align: center; color: var(--text-secondary); padding: 20px 0; font-size: 14px;">
                        No transactions yet.
                    </div>
                }
                @for (t of budgetService.transactions(); track t.id) {
                    <div class="transaction">
                        <div class="t-info">
                            <div class="t-icon">
                                <mat-icon style="font-size: 18px; width: 18px; height: 18px; color: var(--c-pink-pop);">
                                    {{ getEnvelopeIcon(t.envelopeId) }}
                                </mat-icon>
                            </div>
                            <div>
                                <div class="t-name">{{ t.name }}</div>
                                <div class="t-cat">{{ getEnvelopeName(t.envelopeId) }}</div>
                            </div>
                        </div>
                        <div class="t-amount" [style.color]="isPositiveEnvelope(t.envelopeId) ? 'var(--c-green)' : 'inherit'">
                            {{ isPositiveEnvelope(t.envelopeId) ? '+' : '-' }}€{{ t.amount | number:'1.2-2' }}
                        </div>
                    </div>
                }
            </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .setup-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        padding: 40px 0;
    }
    .form-label {
        font-size: 12px;
        font-weight: 600;
        margin-bottom: 8px;
        display: block;
        color: var(--text-secondary);
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    .input-field {
        width: 100%;
        background: var(--c-cream-dark);
        border: 1px solid rgba(74, 26, 44, 0.1);
        padding: 14px 16px;
        border-radius: var(--radius-md);
        font-size: 16px;
        outline: none;
        font-family: var(--font-body);
        color: var(--text-primary);
        box-sizing: border-box;
        transition: all 0.2s ease;
    }
    .input-field:focus {
        border-color: var(--c-pink-pop);
        background: white;
        box-shadow: 0 0 0 3px rgba(242, 155, 169, 0.2);
    }
    .toggle {
        width: 44px;
        height: 24px;
        background: #E0E0E0;
        border-radius: 12px;
        position: relative;
        transition: background 0.3s;
        cursor: pointer;
    }
    .toggle.on {
        background: var(--c-green);
    }
    .toggle::after {
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        background: white;
        border-radius: 50%;
        top: 2px;
        left: 2px;
        transition: transform 0.3s;
    }
    .toggle.on::after {
        transform: translateX(20px);
    }
  `]
})
export class BudgetComponent {
  budgetService = inject(BudgetService);
  private fb = inject(FormBuilder);

  showAddEnvelope = signal(false);
  showLogExpense = signal(false);

  incomeControl = this.fb.control<number | null>(null, [Validators.required, Validators.min(1)]);
  renewDayControl = this.fb.control<number | null>(1, [Validators.required, Validators.min(1), Validators.max(31)]);
  autoSaveControl = this.fb.control<boolean>(false);
  
  envelopeForm = this.fb.group({
    name: ['', Validators.required],
    allocated: [null as number | null],
    isPositive: [false]
  });

  expenseForm = this.fb.group({
    amount: [null as number | null, [Validators.required, Validators.min(0.01)]],
    name: ['', Validators.required],
    envelopeId: ['', Validators.required]
  });

  constructor() {
    this.envelopeForm.get('isPositive')?.valueChanges.subscribe(isPos => {
      const allocControl = this.envelopeForm.get('allocated');
      if (isPos) {
        allocControl?.clearValidators();
        allocControl?.setValue(0);
      } else {
        allocControl?.setValidators([Validators.required, Validators.min(1)]);
      }
      allocControl?.updateValueAndValidity();
    });
  }

  setIncome() {
    if (this.incomeControl.valid && this.incomeControl.value && this.renewDayControl.valid) {
      this.budgetService.setIncome(this.incomeControl.value);
      this.budgetService.renewDay.set(this.renewDayControl.value!);
      this.budgetService.autoSaveEnabled.set(this.autoSaveControl.value!);
    }
  }

  addEnvelope() {
    if (this.envelopeForm.valid) {
      const val = this.envelopeForm.value;
      const newEnv: Envelope = {
        id: Math.random().toString(36).substr(2, 9),
        name: val.name!,
        allocated: val.isPositive ? 0 : val.allocated!,
        spent: 0,
        icon: this.getRandomIcon(),
        color: this.getRandomColor(),
        isPositive: val.isPositive!
      };
      this.budgetService.addEnvelope(newEnv);
      this.envelopeForm.reset({ isPositive: false });
      this.showAddEnvelope.set(false);
    }
  }

  logExpense() {
    if (this.expenseForm.valid) {
      const val = this.expenseForm.value;
      const newTx: Transaction = {
        id: Math.random().toString(36).substr(2, 9),
        envelopeId: val.envelopeId!,
        name: val.name!,
        amount: val.amount!,
        date: new Date()
      };
      
      this.budgetService.logTransaction(newTx);
      
      this.expenseForm.reset({ envelopeId: '' });
      this.showLogExpense.set(false);
    }
  }

  forceRenew() {
    this.budgetService.renewBudget();
  }

  connectBank() {
    alert("Bank connection flow would open here! 🏦✨");
  }

  getEnvelopeIcon(id: string): string {
    const env = this.budgetService.envelopes().find(e => e.id === id);
    return env ? env.icon : 'receipt';
  }

  getEnvelopeName(id: string): string {
    const env = this.budgetService.envelopes().find(e => e.id === id);
    return env ? env.name : 'Unknown';
  }

  isPositiveEnvelope(id: string): boolean {
    const env = this.budgetService.envelopes().find(e => e.id === id);
    return env ? !!env.isPositive : false;
  }

  getProgressBarWidth(spent: number, allocated: number): number {
    if (allocated === 0) return 0;
    const percentage = (spent / allocated) * 100;
    return Math.min(percentage, 100);
  }

  private getRandomIcon(): string {
    const icons = ['shopping_bag', 'restaurant', 'local_cafe', 'flight', 'directions_car', 'checkroom', 'face_3', 'pets', 'home', 'spa', 'fitness_center'];
    return icons[Math.floor(Math.random() * icons.length)];
  }

  private getRandomColor(): string {
    const colors = ['var(--c-green)', 'var(--c-pink-pop)', 'var(--c-burgundy)', '#F6AD55', '#4FD1C5', '#9F7AEA', '#ED64A6'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
}
