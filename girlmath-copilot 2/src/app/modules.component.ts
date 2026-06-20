import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-modules',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="main-view">
        <h1 class="view-title" style="font-family: var(--font-display); font-size: 32px; margin-bottom: 8px;">The Hub</h1>
        <p class="view-subtitle" style="font-family: var(--font-serif); color: var(--text-secondary); margin-bottom: var(--space-lg); font-size: 16px;">Everything you need to optimize your vibe and your wallet.</p>

        <div class="grid-modules">
            
            <div class="module-card" style="background: white; border: 1px solid var(--c-pink-light); border-radius: var(--radius-md); padding: var(--space-md); display: flex; flex-direction: column; gap: 8px; position: relative; box-shadow: 0 4px 12px rgba(74, 26, 44, 0.03); cursor: pointer;" (click)="navigate.emit('education')" tabindex="0" (keyup.enter)="navigate.emit('education')">
                <div class="module-header" style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <mat-icon class="module-emoji" style="font-size: 24px; width: 24px; height: 24px; color: var(--c-pink-pop);">school</mat-icon>
                </div>
                <div class="module-name" style="font-family: var(--font-serif); font-weight: 700; font-size: 15px; margin-top: 4px;">Education</div>
                <div class="module-desc" style="font-size: 12px; color: var(--text-secondary); line-height: 1.3; height: 32px; overflow: hidden;">Master the basics without the boring finance talk.</div>
                <div class="progress-container" style="margin-top: 8px;">
                    <div class="progress-bar" style="height: 6px; background: var(--c-cream-dark); border-radius: 3px; width: 100%; position: relative; overflow: hidden;"><div class="progress-fill" style="position: absolute; top: 0; left: 0; height: 100%; background: var(--c-pink-pop); border-radius: 3px; width: 45%"></div></div>
                    <span class="progress-label" style="font-size: 10px; font-weight: 600; color: var(--c-pink-pop); margin-top: 4px; display: block;">45% Complete</span>
                </div>
            </div>

            <div class="module-card" style="background: white; border: 1px solid var(--c-pink-light); border-radius: var(--radius-md); padding: var(--space-md); display: flex; flex-direction: column; gap: 8px; position: relative; box-shadow: 0 4px 12px rgba(74, 26, 44, 0.03); cursor: pointer;" (click)="navigate.emit('chat')" tabindex="0" (keyup.enter)="navigate.emit('chat')">
                <div class="module-header" style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <mat-icon class="module-emoji" style="font-size: 24px; width: 24px; height: 24px; color: var(--c-pink-pop);">forum</mat-icon>
                </div>
                <div class="module-name" style="font-family: var(--font-serif); font-weight: 700; font-size: 15px; margin-top: 4px;">Negotiator</div>
                <div class="module-desc" style="font-size: 12px; color: var(--text-secondary); line-height: 1.3; height: 32px; overflow: hidden;">Scripted AI help for lower bills and raises.</div>
                <div class="progress-container" style="margin-top: 8px;">
                    <div class="progress-bar" style="height: 6px; background: var(--c-cream-dark); border-radius: 3px; width: 100%; position: relative; overflow: hidden;"><div class="progress-fill" style="position: absolute; top: 0; left: 0; height: 100%; background: var(--c-pink-pop); border-radius: 3px; width: 20%"></div></div>
                    <span class="progress-label" style="font-size: 10px; font-weight: 600; color: var(--c-pink-pop); margin-top: 4px; display: block;">1 active chat</span>
                </div>
            </div>

            <div class="module-card" style="background: white; border: 1px solid var(--c-pink-light); border-radius: var(--radius-md); padding: var(--space-md); display: flex; flex-direction: column; gap: 8px; position: relative; box-shadow: 0 4px 12px rgba(74, 26, 44, 0.03); cursor: pointer;" (click)="navigate.emit('vibe-market')" tabindex="0" (keyup.enter)="navigate.emit('vibe-market')">
                <div class="module-header" style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <mat-icon class="module-emoji" style="font-size: 24px; width: 24px; height: 24px; color: var(--c-pink-pop);">trending_up</mat-icon>
                </div>
                <div class="module-name" style="font-family: var(--font-serif); font-weight: 700; font-size: 15px; margin-top: 4px;">Vibe Markets</div>
                <div class="module-desc" style="font-size: 12px; color: var(--text-secondary); line-height: 1.3; height: 32px; overflow: hidden;">Stock market insights explained in tea.</div>
                <div class="progress-container" style="margin-top: 8px;">
                    <div class="progress-bar" style="height: 6px; background: var(--c-cream-dark); border-radius: 3px; width: 100%; position: relative; overflow: hidden;"><div class="progress-fill" style="position: absolute; top: 0; left: 0; height: 100%; background: var(--c-pink-pop); border-radius: 3px; width: 15%"></div></div>
                    <span class="progress-label" style="font-size: 10px; font-weight: 600; color: var(--c-pink-pop); margin-top: 4px; display: block;">New Tea Alert</span>
                </div>
            </div>

            <div class="module-card" style="background: white; border: 1px solid var(--c-pink-light); border-radius: var(--radius-md); padding: var(--space-md); display: flex; flex-direction: column; gap: 8px; position: relative; box-shadow: 0 4px 12px rgba(74, 26, 44, 0.03); cursor: pointer;" (click)="navigate.emit('dupe-alert')" tabindex="0" (keyup.enter)="navigate.emit('dupe-alert')">
                <div class="module-header" style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <mat-icon class="module-emoji" style="font-size: 24px; width: 24px; height: 24px; color: var(--c-pink-pop);">group</mat-icon>
                </div>
                <div class="module-name" style="font-family: var(--font-serif); font-weight: 700; font-size: 15px; margin-top: 4px;">Dupe Alerts</div>
                <div class="module-desc" style="font-size: 12px; color: var(--text-secondary); line-height: 1.3; height: 32px; overflow: hidden;">Finding the $15 version of that $200 set.</div>
                <div class="progress-container" style="margin-top: 8px;">
                    <div class="progress-bar" style="height: 6px; background: var(--c-cream-dark); border-radius: 3px; width: 100%; position: relative; overflow: hidden;"><div class="progress-fill" style="position: absolute; top: 0; left: 0; height: 100%; background: var(--c-pink-pop); border-radius: 3px; width: 60%"></div></div>
                    <span class="progress-label" style="font-size: 10px; font-weight: 600; color: var(--c-pink-pop); margin-top: 4px; display: block;">12 Dupes found</span>
                </div>
            </div>

            <div class="module-card" style="background: white; border: 1px solid var(--c-pink-light); border-radius: var(--radius-md); padding: var(--space-md); display: flex; flex-direction: column; gap: 8px; position: relative; box-shadow: 0 4px 12px rgba(74, 26, 44, 0.03); cursor: pointer;" (click)="navigate.emit('logic-math')" tabindex="0" (keyup.enter)="navigate.emit('logic-math')">
                <div class="module-header" style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <mat-icon class="module-emoji" style="font-size: 24px; width: 24px; height: 24px; color: var(--c-pink-pop);">calculate</mat-icon>
                </div>
                <div class="module-name" style="font-family: var(--font-serif); font-weight: 700; font-size: 15px; margin-top: 4px;">Logic Math</div>
                <div class="module-desc" style="font-size: 12px; color: var(--text-secondary); line-height: 1.3; height: 32px; overflow: hidden;">Calculators for "Free" money scenarios.</div>
                <div class="progress-container" style="margin-top: 8px;">
                    <div class="progress-bar" style="height: 6px; background: var(--c-cream-dark); border-radius: 3px; width: 100%; position: relative; overflow: hidden;"><div class="progress-fill" style="position: absolute; top: 0; left: 0; height: 100%; background: var(--c-pink-pop); border-radius: 3px; width: 30%"></div></div>
                    <span class="progress-label" style="font-size: 10px; font-weight: 600; color: var(--c-pink-pop); margin-top: 4px; display: block;">Level 3 Math</span>
                </div>
            </div>

            <div class="module-card" style="grid-column: 1 / -1; background: var(--c-pink-light); border: 1px solid var(--c-pink-pop); border-radius: var(--radius-md); padding: var(--space-md); display: flex; align-items: center; justify-content: space-between; gap: 8px; position: relative; box-shadow: 0 4px 12px rgba(74, 26, 44, 0.03); cursor: pointer;" (click)="navigate.emit('about-me')" tabindex="0" (keyup.enter)="navigate.emit('about-me')">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <mat-icon class="module-emoji" style="font-size: 24px; width: 24px; height: 24px; color: var(--c-burgundy);">auto_awesome</mat-icon>
                    <div class="module-name" style="font-family: var(--font-serif); font-weight: 700; font-size: 18px; color: var(--c-burgundy);">About Us</div>
                </div>
                <mat-icon style="color: var(--c-burgundy);">chevron_right</mat-icon>
            </div>
        </div>
    </div>
  `
})
export class ModulesComponent {
  navigate = output<string>();
}
