import { Component, output, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { VibeMarketService } from './vibe-market.service';

@Component({
  selector: 'app-vibe-market',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="main-view">
      <div class="header" style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px;">
        <button (click)="back.emit()" style="background: transparent; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; background: var(--c-pink-light); color: var(--c-burgundy);">
          <mat-icon>arrow_back</mat-icon>
        </button>
        <div>
          <h1 class="view-title" style="font-family: var(--font-display); font-size: 28px; margin-bottom: 4px;">Vibe Markets</h1>
          <p class="view-subtitle" style="font-family: var(--font-serif); color: var(--text-secondary); font-size: 14px;">Stock market tea, explained in girl math.</p>
        </div>
      </div>

      @if (vibeMarketService.loading()) {
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 40px 0; gap: 16px; color: var(--c-pink-pop);">
          <mat-icon class="animate-spin" style="font-size: 32px; width: 32px; height: 32px;">sync</mat-icon>
          <p style="font-family: var(--font-serif); font-style: italic;">Spilling the tea... hold on bestie.</p>
        </div>
      } @else if (vibeMarketService.error()) {
        <div style="background: rgba(211, 47, 47, 0.1); border: 1px solid #d32f2f; border-radius: var(--radius-md); padding: 16px; color: #d32f2f; text-align: center;">
          <mat-icon style="margin-bottom: 8px;">error_outline</mat-icon>
          <p>{{ vibeMarketService.error() }}</p>
          <button (click)="vibeMarketService.fetchNews()" style="margin-top: 12px; background: #d32f2f; color: white; border: none; padding: 8px 16px; border-radius: var(--radius-sm); cursor: pointer; font-weight: 600;">Try Again</button>
        </div>
      } @else {
        <div style="display: flex; flex-direction: column; gap: 16px;">
          @for (item of vibeMarketService.news(); track item.title) {
            <div style="background: white; border: 1px solid var(--c-pink-light); border-radius: var(--radius-md); padding: 20px; box-shadow: 0 4px 12px rgba(74, 26, 44, 0.03);">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
                <h3 style="font-family: var(--font-serif); font-size: 18px; font-weight: 700; color: var(--c-burgundy); margin: 0; line-height: 1.3;">{{ item.title }}</h3>
                <mat-icon style="color: var(--c-pink-pop); font-size: 20px; width: 20px; height: 20px; margin-left: 12px; flex-shrink: 0;">trending_up</mat-icon>
              </div>
              
              <div style="font-size: 12px; color: var(--text-secondary); margin-bottom: 16px; display: flex; align-items: center; gap: 4px;">
                <mat-icon style="font-size: 14px; width: 14px; height: 14px;">public</mat-icon>
                <span>{{ item.source }}</span>
              </div>

              <div style="background: var(--c-pink-light); border-radius: var(--radius-sm); padding: 16px; margin-bottom: 16px;">
                <div style="font-weight: 600; color: var(--c-pink-pop); font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px; display: flex; align-items: center; gap: 4px;">
                  <mat-icon style="font-size: 16px; width: 16px; height: 16px;">auto_awesome</mat-icon>
                  Girl Math Translation
                </div>
                <p style="font-size: 14px; line-height: 1.5; color: var(--c-burgundy); margin: 0;">{{ item.girlMathSummary }}</p>
              </div>

              @if (item.expanded) {
                <div style="margin-top: 16px; padding-top: 16px; border-top: 1px dashed var(--c-pink-light);">
                  <div style="font-weight: 600; color: var(--text-primary); font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">The Full Tea</div>
                  <p style="font-size: 14px; line-height: 1.6; color: var(--text-secondary); margin-bottom: 16px; white-space: pre-line;">{{ item.fullArticle }}</p>
                  @if (item.url) {
                    <a [href]="item.url" target="_blank" style="display: inline-flex; align-items: center; gap: 4px; color: var(--c-pink-pop); font-size: 13px; font-weight: 600; text-decoration: none;">
                      Read original article <mat-icon style="font-size: 16px; width: 16px; height: 16px;">open_in_new</mat-icon>
                    </a>
                  }
                </div>
              }

              <button (click)="item.expanded = !item.expanded" style="width: 100%; background: transparent; border: 1px solid var(--c-pink-pop); color: var(--c-pink-pop); padding: 10px; border-radius: var(--radius-sm); font-weight: 600; font-size: 14px; cursor: pointer; margin-top: 8px; transition: all 0.2s; display: flex; align-items: center; justify-content: center; gap: 8px;">
                {{ item.expanded ? 'Hide the details' : 'See more tea' }}
                <mat-icon style="font-size: 18px; width: 18px; height: 18px;">{{ item.expanded ? 'expand_less' : 'expand_more' }}</mat-icon>
              </button>
            </div>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .animate-spin {
      animation: spin 1s linear infinite;
    }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `]
})
export class VibeMarketComponent implements OnInit {
  back = output<void>();
  vibeMarketService = inject(VibeMarketService);

  ngOnInit() {
    if (this.vibeMarketService.news().length === 0) {
      this.vibeMarketService.fetchNews();
    }
  }
}
