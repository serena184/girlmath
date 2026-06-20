import { Component, output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { LogicMathService } from './logic-math.service';

@Component({
  selector: 'app-logic-math',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule],
  template: `
    <div class="main-view">
      <div class="header" style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px;">
        <button (click)="back.emit()" style="background: transparent; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; background: var(--c-pink-light); color: var(--c-burgundy);">
          <mat-icon>arrow_back</mat-icon>
        </button>
        <div>
          <h1 class="view-title" style="font-family: var(--font-display); font-size: 28px; margin-bottom: 4px;">Logic Math</h1>
          <p class="view-subtitle" style="font-family: var(--font-serif); color: var(--text-secondary); font-size: 14px;">Calculators for "Free" money scenarios.</p>
        </div>
      </div>

      <!-- Total Saved Card -->
      <div style="background: linear-gradient(135deg, var(--c-pink-pop), #d81b60); border-radius: var(--radius-lg); padding: 32px 24px; color: white; text-align: center; margin-bottom: 32px; box-shadow: 0 8px 24px rgba(233, 30, 99, 0.2);">
        <div style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600; opacity: 0.9; margin-bottom: 8px;">Total Girl Math Savings</div>
        <div style="font-family: var(--font-display); font-size: 48px; font-weight: 700; line-height: 1;">
          \${{ logicMathService.totalSaved() | number:'1.2-2' }}
        </div>
        <div style="font-size: 14px; opacity: 0.8; margin-top: 12px; font-family: var(--font-serif); font-style: italic;">
          Basically, you made money today.
        </div>
      </div>

      <!-- Add New Saving Form -->
      <div style="background: white; border: 1px solid var(--c-pink-light); border-radius: var(--radius-md); padding: 24px; margin-bottom: 32px; box-shadow: 0 4px 12px rgba(74, 26, 44, 0.03);">
        <h3 style="font-family: var(--font-serif); font-size: 18px; font-weight: 700; color: var(--c-burgundy); margin: 0 0 16px 0;">Log a "Free" Money Moment</h3>
        
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div>
            <label for="newDescription" style="display: block; font-size: 12px; font-weight: 600; color: var(--text-secondary); margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.05em;">What didn't you buy?</label>
            <input type="text" id="newDescription" [(ngModel)]="newDescription" placeholder="e.g., I didn't buy coffee for 3 days in a row" style="width: 100%; padding: 12px 16px; border-radius: var(--radius-sm); border: 1px solid #e0e0e0; font-size: 14px; outline: none; transition: border-color 0.2s;" (focus)="onFocus($event)" (blur)="onBlur($event)">
          </div>
          
          <div>
            <label for="newAmount" style="display: block; font-size: 12px; font-weight: 600; color: var(--text-secondary); margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.05em;">How much did you save?</label>
            <div style="position: relative;">
              <span style="position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: var(--text-secondary); font-weight: 600;">$</span>
              <input type="number" id="newAmount" [(ngModel)]="newAmount" placeholder="15.00" style="width: 100%; padding: 12px 16px 12px 32px; border-radius: var(--radius-sm); border: 1px solid #e0e0e0; font-size: 14px; outline: none; transition: border-color 0.2s;" (focus)="onFocus($event)" (blur)="onBlur($event)">
            </div>
          </div>

          <button (click)="saveItem()" [disabled]="!newDescription || !newAmount || newAmount <= 0" style="background: var(--c-pink-pop); color: white; border: none; padding: 14px; border-radius: var(--radius-sm); font-weight: 600; font-size: 15px; cursor: pointer; transition: opacity 0.2s; display: flex; align-items: center; justify-content: center; gap: 8px; opacity: (!newDescription || !newAmount || newAmount <= 0) ? 0.5 : 1;">
            <mat-icon style="font-size: 20px; width: 20px; height: 20px;">add_circle</mat-icon>
            Add to my Girl Math Fund
          </button>
        </div>
      </div>

      <!-- History -->
      <div>
        <h3 style="font-family: var(--font-serif); font-size: 18px; font-weight: 700; color: var(--c-burgundy); margin: 0 0 16px 0;">Savings History</h3>
        
        @if (logicMathService.savedItems().length === 0) {
          <div style="text-align: center; padding: 32px 16px; background: var(--c-cream); border-radius: var(--radius-md); border: 1px dashed var(--c-pink-light);">
            <mat-icon style="font-size: 32px; width: 32px; height: 32px; color: var(--c-pink-pop); margin-bottom: 12px; opacity: 0.5;">receipt_long</mat-icon>
            <p style="font-family: var(--font-serif); color: var(--text-secondary); font-size: 15px;">No savings logged yet. Time to not buy something!</p>
          </div>
        } @else {
          <div style="display: flex; flex-direction: column; gap: 12px;">
            @for (item of logicMathService.savedItems(); track item.id) {
              <div style="background: white; border: 1px solid var(--c-pink-light); border-radius: var(--radius-sm); padding: 16px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 8px rgba(74, 26, 44, 0.02);">
                <div style="flex: 1; padding-right: 16px;">
                  <div style="font-weight: 600; color: var(--text-primary); font-size: 14px; margin-bottom: 4px;">{{ item.description }}</div>
                  <div style="font-size: 11px; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em;">{{ item.date | date:'mediumDate' }}</div>
                </div>
                <div style="display: flex; align-items: center; gap: 16px;">
                  <div style="font-weight: 700; color: var(--c-green); font-size: 16px;">+\${{ item.amount | number:'1.2-2' }}</div>
                  <button (click)="logicMathService.removeItem(item.id)" style="background: transparent; border: none; cursor: pointer; color: #d32f2f; opacity: 0.5; transition: opacity 0.2s; display: flex; align-items: center; justify-content: center; padding: 4px;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.5'">
                    <mat-icon style="font-size: 20px; width: 20px; height: 20px;">delete_outline</mat-icon>
                  </button>
                </div>
              </div>
            }
          </div>
        }
      </div>
    </div>
  `
})
export class LogicMathComponent {
  back = output<void>();
  logicMathService = inject(LogicMathService);

  newDescription = '';
  newAmount: number | null = null;

  onFocus(event: FocusEvent) {
    if (event.target instanceof HTMLElement) {
      event.target.style.borderColor = 'var(--c-pink-pop)';
    }
  }

  onBlur(event: FocusEvent) {
    if (event.target instanceof HTMLElement) {
      event.target.style.borderColor = '#e0e0e0';
    }
  }

  saveItem() {
    if (this.newDescription && this.newAmount && this.newAmount > 0) {
      this.logicMathService.addItem(this.newDescription, this.newAmount);
      this.newDescription = '';
      this.newAmount = null;
    }
  }
}
