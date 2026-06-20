import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="p-6 pt-12">
      <!-- Header -->
      <div class="flex justify-between items-center mb-8">
        <h1 class="font-serif text-3xl">Action Items</h1>
        <button class="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
          <mat-icon class="text-gray-600">search</mat-icon>
        </button>
      </div>

      <!-- Calendar Widget -->
      <div class="bg-[#ff8fab] rounded-3xl p-6 mb-8">
        <div class="flex justify-between items-center mb-6">
          <h2 class="font-serif text-xl text-[#4a152b]">February 11</h2>
          <span class="text-sm font-medium text-[#4a152b]/60">Today</span>
        </div>
        
        <div class="flex justify-between items-center">
          <div class="flex flex-col items-center gap-2">
            <span class="text-xs text-[#4a152b]/60">Sun</span>
            <span class="text-sm font-medium text-[#4a152b]">8</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <span class="text-xs text-[#4a152b]/60">Mon</span>
            <span class="text-sm font-medium text-[#4a152b]">9</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <span class="text-xs text-[#4a152b]/60">Tue</span>
            <span class="text-sm font-medium text-[#4a152b]">10</span>
          </div>
          <div class="flex flex-col items-center gap-2 bg-[#4a152b] text-white px-3 py-2 rounded-full">
            <span class="text-xs text-white/60">Wed</span>
            <span class="text-sm font-medium">11</span>
            <div class="w-1 h-1 bg-white rounded-full mt-1"></div>
          </div>
          <div class="flex flex-col items-center gap-2">
            <span class="text-xs text-[#4a152b]/60">Thu</span>
            <span class="text-sm font-medium text-[#4a152b]">12</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <span class="text-xs text-[#4a152b]/60">Fri</span>
            <span class="text-sm font-medium text-[#4a152b]">13</span>
            <div class="w-1 h-1 bg-[#4a152b]/30 rounded-full mt-1"></div>
          </div>
          <div class="flex flex-col items-center gap-2">
            <span class="text-xs text-[#4a152b]/60">Sat</span>
            <span class="text-sm font-medium text-[#4a152b]">14</span>
          </div>
        </div>
      </div>

      <!-- Upcoming -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-4">
          <h3 class="text-lg font-medium text-[#4a152b]">Upcoming</h3>
          <div class="w-6 h-6 bg-[#4a152b] text-white rounded-full flex items-center justify-center text-xs font-medium">1</div>
        </div>

        <div class="bg-[#ffd6e0] rounded-3xl p-5 relative">
          <div class="flex justify-between items-start mb-2">
            <span class="text-sm font-medium text-[#8c2f4e]/60">10:00 - 11:00 AM</span>
            <button class="w-8 h-8 bg-white/50 rounded-full flex items-center justify-center hover:bg-white transition-colors">
              <mat-icon class="text-sm text-[#8c2f4e]">north_east</mat-icon>
            </button>
          </div>
          <h4 class="font-serif text-2xl text-[#8c2f4e] leading-tight w-3/4 mb-6">
            Negotiate WiFi Bill with Comcast
          </h4>
          
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-3 bg-white/40 rounded-full p-1 pr-4">
              <div class="w-8 h-8 bg-[#8c2f4e] text-white rounded-full flex items-center justify-center">
                <mat-icon class="text-sm">smart_toy</mat-icon>
              </div>
              <div class="flex flex-col">
                <span class="text-xs font-medium text-[#8c2f4e]">AI Agent</span>
                <span class="text-[10px] text-[#8c2f4e]/60">Ready to draft</span>
              </div>
            </div>
            <span class="bg-white/50 text-[#8c2f4e] text-xs font-medium px-3 py-1.5 rounded-full">today</span>
          </div>
        </div>
      </div>

      <!-- Recent Insights -->
      <div>
        <h3 class="text-lg font-medium mb-4 text-[#4a152b]">Recent Insights</h3>
        
        <div class="flex flex-col gap-4">
          <!-- Insight 1 -->
          <div class="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm">
            <div class="w-12 h-12 bg-[#ffb3c6] rounded-full flex items-center justify-center shrink-0">
              <mat-icon class="text-[#4a152b]">shopping_bag</mat-icon>
            </div>
            <div class="flex-1">
              <h4 class="font-medium text-[15px] mb-0.5 text-[#4a152b]">Sephora Haul</h4>
              <p class="text-xs text-[#8c2f4e]/70">Found 3 dupes. Saved $85.</p>
            </div>
            <div class="flex items-center gap-1 bg-[#ff8fab]/20 text-[#8c2f4e] px-2 py-1 rounded-md">
              <mat-icon class="text-[14px] w-[14px] h-[14px]">arrow_upward</mat-icon>
              <span class="text-xs font-medium">Profit</span>
            </div>
          </div>

          <!-- Insight 2 -->
          <div class="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm">
            <div class="w-12 h-12 bg-[#fff0f3] rounded-full flex items-center justify-center shrink-0">
              <mat-icon class="text-[#8c2f4e]">local_cafe</mat-icon>
            </div>
            <div class="flex-1">
              <h4 class="font-medium text-[15px] mb-0.5 text-[#4a152b]">Daily Coffee</h4>
              <p class="text-xs text-[#8c2f4e]/70">Rounded up $4.50 to HYSA.</p>
            </div>
            <div class="flex items-center gap-1 bg-[#ffd6e0]/50 text-[#8c2f4e] px-2 py-1 rounded-md">
              <mat-icon class="text-[14px] w-[14px] h-[14px]">savings</mat-icon>
              <span class="text-xs font-medium">Saved</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ActionsComponent {}
