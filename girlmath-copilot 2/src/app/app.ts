import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ChatbotComponent } from './chatbot.component';
import { ModulesComponent } from './modules.component';
import { EducationComponent } from './education.component';
import { BudgetComponent } from './budget.component';
import { ProfileComponent } from './profile.component';
import { VibeMarketComponent } from './vibe-market.component';
import { DupeAlertComponent } from './dupe-alert.component';
import { LogicMathComponent } from './logic-math.component';
import { AboutMeComponent } from './about-me.component';

type AppView = 'feed' | 'modules' | 'education' | 'chat' | 'budget' | 'profile' | 'vibe-market' | 'dupe-alert' | 'logic-math' | 'about-me';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DashboardComponent, ChatbotComponent, ModulesComponent, EducationComponent, BudgetComponent, ProfileComponent, VibeMarketComponent, DupeAlertComponent, LogicMathComponent, AboutMeComponent],
  template: `
    <div class="max-w-md mx-auto h-screen bg-[var(--bg-app)] relative flex flex-col shadow-2xl sm:rounded-[3rem] sm:h-[850px] sm:my-8 sm:border-8 border-white overflow-hidden">
      
      <!-- Header -->
      <header class="app-header">
          @if (currentView() === 'education' || currentView() === 'vibe-market' || currentView() === 'dupe-alert' || currentView() === 'logic-math' || currentView() === 'about-me') {
            <div style="display: flex; align-items: center; gap: 12px; cursor: pointer;" (click)="currentView.set('modules')" tabindex="0" (keyup.enter)="currentView.set('modules')">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"></path><polyline points="12 19 5 12 12 5"></polyline></svg>
                <a class="logo">Modules</a>
            </div>
            <button class="btn-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
          } @else if (currentView() === 'chat') {
            <a class="logo">GirlMath</a>
            <button style="background: none; border: none; padding: 0;" (click)="currentView.set('profile')">
                <div style="width: 32px; height: 32px; background: var(--c-pink-light); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                    <span style="font-size: 14px;">✨</span>
                </div>
            </button>
          } @else if (currentView() === 'profile') {
            <div class="logo">GirlMath</div>
            <button style="background:none; border:none; color:var(--text-primary); font-family:var(--font-serif); font-weight:600; cursor: pointer;">Save</button>
          } @else {
            <a class="logo">GirlMath</a>
            <button class="btn-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
            </button>
          }
      </header>

      <!-- Main Content Area -->
      <div class="flex-1 overflow-y-auto pb-[var(--nav-height)] hide-scrollbar">
        @if (currentView() === 'feed') {
          <app-dashboard (navigate)="currentView.set($any($event))"></app-dashboard>
        } @else if (currentView() === 'modules') {
          <app-modules (navigate)="currentView.set($any($event))"></app-modules>
        } @else if (currentView() === 'education') {
          <app-education (back)="currentView.set('modules')"></app-education>
        } @else if (currentView() === 'vibe-market') {
          <app-vibe-market (back)="currentView.set('modules')"></app-vibe-market>
        } @else if (currentView() === 'dupe-alert') {
          <app-dupe-alert (back)="currentView.set('modules')"></app-dupe-alert>
        } @else if (currentView() === 'logic-math') {
          <app-logic-math (back)="currentView.set('modules')"></app-logic-math>
        } @else if (currentView() === 'about-me') {
          <app-about-me (back)="currentView.set('modules')"></app-about-me>
        } @else if (currentView() === 'chat') {
          <app-chatbot class="h-full block"></app-chatbot>
        } @else if (currentView() === 'budget') {
          <app-budget></app-budget>
        } @else if (currentView() === 'profile') {
          <app-profile></app-profile>
        }
      </div>

      <!-- Bottom Navigation -->
      <nav class="bottom-nav">
          <button class="nav-item" [class.active]="currentView() === 'feed'" (click)="currentView.set('feed')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              Feed
          </button>
          <button class="nav-item" [class.active]="currentView() === 'modules' || currentView() === 'education' || currentView() === 'vibe-market' || currentView() === 'dupe-alert' || currentView() === 'logic-math' || currentView() === 'about-me'" (click)="currentView.set('modules')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              Modules
          </button>
          <button class="nav-item" [class.active]="currentView() === 'chat'" (click)="currentView.set('chat')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              Chat
          </button>
          <button class="nav-item" [class.active]="currentView() === 'budget'" (click)="currentView.set('budget')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              Budget
          </button>
          <button class="nav-item" [class.active]="currentView() === 'profile'" (click)="currentView.set('profile')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              Profile
          </button>
      </nav>
    </div>
  `,
  styles: [`
    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .hide-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `]
})
export class App {
  currentView = signal<AppView>('feed');
}
