import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="h-full flex flex-col bg-[#ff8fab] relative">
      <!-- Floating Cards Area -->
      <div class="flex-1 relative overflow-hidden pt-12 px-4">
        
        <!-- Card 1 -->
        <div class="absolute top-20 left-4 right-12 bg-[#ffb3c6] rounded-3xl p-5 shadow-lg transform -rotate-6 z-10">
          <div class="flex justify-between items-start mb-2">
            <span class="text-xs font-medium text-[#4a152b]/60">Dupe Alert</span>
            <mat-icon class="text-[#4a152b]/40 text-sm">search</mat-icon>
          </div>
          <div class="font-serif text-xl text-[#4a152b] leading-tight mb-3">
            Found a $40 dupe for your $150 skincare.
          </div>
          <div class="flex items-center gap-2 bg-white/50 rounded-full p-1 pr-3 w-max">
            <img src="https://picsum.photos/seed/skincare/100/100" alt="Skincare product" class="w-6 h-6 rounded-full" referrerpolicy="no-referrer">
            <span class="text-xs font-medium text-[#4a152b]">+$110 Girl Math Profit</span>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="absolute top-56 left-12 right-4 bg-[#ffd6e0] rounded-3xl p-5 shadow-lg transform rotate-3 z-20">
          <div class="flex justify-between items-start mb-2">
            <span class="text-xs font-medium text-[#8c2f4e]/60">Vibe Markets</span>
            <mat-icon class="text-[#8c2f4e]/40 text-sm">trending_up</mat-icon>
          </div>
          <div class="font-serif text-xl text-[#8c2f4e] leading-tight mb-3">
            Your Apple stock is paying for your iCloud now.
          </div>
          <div class="flex items-end gap-1 h-10 mt-2">
            <div class="w-1/6 bg-[#8c2f4e]/20 rounded-t-sm h-4"></div>
            <div class="w-1/6 bg-[#8c2f4e]/30 rounded-t-sm h-6"></div>
            <div class="w-1/6 bg-[#8c2f4e]/40 rounded-t-sm h-5"></div>
            <div class="w-1/6 bg-[#8c2f4e]/50 rounded-t-sm h-8"></div>
            <div class="w-1/6 bg-[#8c2f4e]/70 rounded-t-sm h-7"></div>
            <div class="w-1/6 bg-[#8c2f4e] rounded-t-sm h-10"></div>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="absolute top-96 left-6 right-10 bg-[#fff0f3] rounded-3xl p-5 shadow-lg transform -rotate-2 z-30">
          <div class="flex justify-between items-start mb-2">
            <span class="text-xs font-medium text-[#8c2f4e]/60">The Negotiator</span>
            <mat-icon class="text-[#8c2f4e]/40 text-sm">forum</mat-icon>
          </div>
          <div class="font-serif text-xl text-[#8c2f4e] leading-tight">
            I drafted an email to lower your WiFi bill.
          </div>
        </div>

      </div>

      <!-- Bottom Content -->
      <div class="bg-white rounded-t-[2.5rem] p-8 pb-12 z-40 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <h1 class="font-serif text-4xl leading-tight mb-4 text-[#4a152b]">
          Supporting Your<br>Journey to Better<br>Wealth
        </h1>
        <p class="text-gray-500 mb-8 text-sm leading-relaxed">
          Connect your accounts and let your AI copilot turn Girl Math into real wealth. We find dupes, negotiate bills, and explain markets in your language.
        </p>
        <button 
          (click)="getStarted.emit()"
          class="w-full bg-[#4a152b] text-white rounded-full py-4 font-medium text-lg flex items-center justify-center gap-2 hover:bg-[#310e1d] transition-colors">
          Get Started
          <mat-icon class="text-sm">arrow_forward_ios</mat-icon>
        </button>
      </div>
    </div>
  `
})
export class OnboardingComponent {
  @Output() getStarted = new EventEmitter<void>();
}
