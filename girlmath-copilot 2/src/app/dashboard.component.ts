import { Component, output, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { BudgetService } from './budget.service';
import { UserService } from './user.service';
import { LogicMathService } from './logic-math.service';
import { VibeMarketService } from './vibe-market.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="main-view">
        
        <div>
            <h2 style="font-family: var(--font-serif); font-weight: 400; color: var(--text-secondary); font-size: 16px;">Good morning, {{ userService.name().split(' ')[0] }}</h2>
            <h1 style="font-size: 28px; line-height: 1.1;">Your money is <span style="font-style: italic; color: var(--c-pink-pop)">thriving</span> today.</h1>
        </div>

        <div class="card highlight">
            <svg class="sparkle" style="top: 12px; right: 12px; opacity: 0.6;" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"></path></svg>
            
            <div class="mb-sm">
                <span class="ai-badge">Copilot Insight</span>
            </div>
            <p style="font-family: var(--font-serif); font-size: 18px; margin: 0; line-height: 1.4;">
                @if (logicMathService.savedItems().length > 0) {
                    You saved \${{ logicMathService.savedItems()[0].amount }} on "{{ logicMathService.savedItems()[0].description }}". By Girl Math logic, that's basically free money for the Sephora sale.
                } @else {
                    "If you buy it on sale, you're actually making money." - Ancient Girl Math Proverb
                }
            </p>
        </div>

        <div>
            <div style="display: flex; justify-content: space-between; align-items: baseline;" class="mb-md">
                <h3>Modules</h3>
                <button style="color: var(--c-pink-pop); background: none; border: none; font-size: 14px; font-weight: 600; cursor: pointer;" (click)="navigate.emit('modules')">View All</button>
            </div>
            <div class="grid-modules">
                <div class="module-item" style="cursor: pointer;" (click)="navigate.emit('education')" tabindex="0" (keyup.enter)="navigate.emit('education')">
                    <mat-icon class="module-icon" style="color: var(--c-pink-pop);">school</mat-icon>
                    <span class="module-label">Education</span>
                </div>
                <div class="module-item" style="cursor: pointer;" (click)="navigate.emit('chat')" tabindex="0" (keyup.enter)="navigate.emit('chat')">
                    <mat-icon class="module-icon" style="color: var(--c-pink-pop);">forum</mat-icon>
                    <span class="module-label">Negotiator</span>
                </div>
                <div class="module-item" style="cursor: pointer;" (click)="navigate.emit('budget')" tabindex="0" (keyup.enter)="navigate.emit('budget')">
                    <mat-icon class="module-icon" style="color: var(--c-pink-pop);">bar_chart</mat-icon>
                    <span class="module-label">Budget</span>
                </div>
                <div class="module-item" style="cursor: pointer;" (click)="navigate.emit('budget')" tabindex="0" (keyup.enter)="navigate.emit('budget')">
                    <mat-icon class="module-icon" style="color: var(--c-pink-pop);">insights</mat-icon>
                    <span class="module-label">Forecast</span>
                </div>
            </div>
        </div>

        <div>
            <h3 class="mb-md">Recent Spends</h3>
            <div class="budget-list">
                <div class="transaction">
                    <div class="t-info">
                        <div class="t-icon"><mat-icon style="font-size: 16px; width: 16px; height: 16px; color: var(--c-pink-pop);">local_cafe</mat-icon></div>
                        <div>
                            <div class="t-name">Starbucks</div>
                            <div class="t-cat">Treats</div>
                        </div>
                    </div>
                    <div class="t-amount">-$7.50</div>
                </div>
                <div class="transaction">
                    <div class="t-info">
                        <div class="t-icon"><mat-icon style="font-size: 16px; width: 16px; height: 16px; color: var(--c-pink-pop);">shopping_cart</mat-icon></div>
                        <div>
                            <div class="t-name">Trader Joe's</div>
                            <div class="t-cat">Groceries</div>
                        </div>
                    </div>
                    <div class="t-amount">-$42.18</div>
                </div>
                <div class="transaction">
                    <div class="t-info">
                        <div class="t-icon"><mat-icon style="font-size: 16px; width: 16px; height: 16px; color: var(--c-pink-pop);">face_3</mat-icon></div>
                        <div>
                            <div class="t-name">Glossier</div>
                            <div class="t-cat">Investments</div>
                        </div>
                    </div>
                    <div class="t-amount">-$32.00</div>
                </div>
            </div>
        </div>

        <div class="card" style="background-color: var(--c-green); color: var(--c-cream); cursor: pointer;" (click)="navigate.emit('vibe-market')" tabindex="0" (keyup.enter)="navigate.emit('vibe-market')">
            <div class="card-header">
                <div class="card-title" style="color: white; display: flex; align-items: center; gap: 8px;">Market Tea <mat-icon style="font-size: 20px; width: 20px; height: 20px;">local_cafe</mat-icon></div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7V17"></path></svg>
            </div>
            <p style="margin: 0; opacity: 0.9; line-height: 1.5;">
                @if (vibeMarketService.news().length > 0) {
                    {{ vibeMarketService.news()[0].girlMathSummary.substring(0, 120) }}...
                } @else {
                    Loading the latest market tea...
                }
            </p>
        </div>

    </div>
  `
})
export class DashboardComponent implements OnInit {
  navigate = output<string>();
  budgetService = inject(BudgetService);
  userService = inject(UserService);
  logicMathService = inject(LogicMathService);
  vibeMarketService = inject(VibeMarketService);

  ngOnInit() {
    if (this.vibeMarketService.news().length === 0) {
      this.vibeMarketService.fetchNews();
    }
  }
}
