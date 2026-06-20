import { Component, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { GoogleGenAI } from '@google/genai';

interface DupeItem {
  originalName: string;
  originalPrice: string;
  originalImageUrl: string;
  dupeName: string;
  dupePrice: string;
  dupeImageUrl: string;
  reviews: string[];
  savings: string;
}

@Component({
  selector: 'app-dupe-alert',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule],
  template: `
    <div class="main-view">
      <div class="header" style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px;">
        <button (click)="back.emit()" style="background: transparent; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; background: var(--c-pink-light); color: var(--c-burgundy);">
          <mat-icon>arrow_back</mat-icon>
        </button>
        <div>
          <h1 class="view-title" style="font-family: var(--font-display); font-size: 28px; margin-bottom: 4px;">Dupe Alerts</h1>
          <p class="view-subtitle" style="font-family: var(--font-serif); color: var(--text-secondary); font-size: 14px;">Finding the $15 version of that $200 set.</p>
        </div>
      </div>

      <div style="position: relative; margin-bottom: 24px;">
        <input type="text" [(ngModel)]="searchQuery" (keyup.enter)="searchDupes()" placeholder="Search for a product (e.g., Dyson Airwrap, Lululemon Align...)" style="width: 100%; padding: 16px 48px 16px 16px; border-radius: var(--radius-md); border: 1px solid var(--c-pink-light); font-size: 16px; outline: none; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
        <button (click)="searchDupes()" style="position: absolute; right: 12px; top: 50%; transform: translateY(-50%); background: transparent; border: none; cursor: pointer; color: var(--c-pink-pop); display: flex; align-items: center; justify-content: center;">
          <mat-icon>search</mat-icon>
        </button>
      </div>

      @if (loading()) {
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 40px 0; gap: 16px; color: var(--c-pink-pop);">
          <mat-icon class="animate-spin" style="font-size: 32px; width: 32px; height: 32px;">sync</mat-icon>
          <p style="font-family: var(--font-serif); font-style: italic;">Scouring TikTok and the web for the best dupes...</p>
        </div>
      } @else if (error()) {
        <div style="background: rgba(211, 47, 47, 0.1); border: 1px solid #d32f2f; border-radius: var(--radius-md); padding: 16px; color: #d32f2f; text-align: center;">
          <mat-icon style="margin-bottom: 8px;">error_outline</mat-icon>
          <p>{{ error() }}</p>
        </div>
      } @else {
        <div style="display: flex; flex-direction: column; gap: 24px;">
          @for (item of dupes(); track item.originalName) {
            <div style="background: white; border: 1px solid var(--c-pink-light); border-radius: var(--radius-lg); overflow: hidden; box-shadow: 0 4px 12px rgba(74, 26, 44, 0.03);">
              
              <div style="background: var(--c-pink-pop); color: white; padding: 8px 16px; font-weight: 600; font-size: 14px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 8px;">
                <mat-icon style="font-size: 18px; width: 18px; height: 18px;">savings</mat-icon>
                Girl Math: You save {{ item.savings }}!
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--c-pink-light);">
                <!-- Original -->
                <div style="background: white; padding: 16px; display: flex; flex-direction: column; align-items: center; text-align: center;">
                  <div style="font-size: 10px; font-weight: 700; text-transform: uppercase; color: var(--text-secondary); letter-spacing: 0.1em; margin-bottom: 12px; padding: 4px 8px; background: #f5f5f5; border-radius: 4px;">The Splurge</div>
                  <img [src]="item.originalImageUrl" alt="Original Product" referrerpolicy="no-referrer" style="width: 120px; height: 120px; object-fit: cover; border-radius: var(--radius-sm); margin-bottom: 12px; border: 1px solid #eee;">
                  <h3 style="font-family: var(--font-serif); font-size: 14px; font-weight: 600; color: var(--c-burgundy); margin: 0 0 4px 0; line-height: 1.2;">{{ item.originalName }}</h3>
                  <div style="font-weight: 700; color: var(--text-primary); font-size: 16px;">{{ item.originalPrice }}</div>
                </div>

                <!-- Dupe -->
                <div style="background: white; padding: 16px; display: flex; flex-direction: column; align-items: center; text-align: center;">
                  <div style="font-size: 10px; font-weight: 700; text-transform: uppercase; color: var(--c-pink-pop); letter-spacing: 0.1em; margin-bottom: 12px; padding: 4px 8px; background: var(--c-pink-light); border-radius: 4px;">The Steal</div>
                  <img [src]="item.dupeImageUrl" alt="Dupe Product" referrerpolicy="no-referrer" style="width: 120px; height: 120px; object-fit: cover; border-radius: var(--radius-sm); margin-bottom: 12px; border: 1px solid var(--c-pink-light);">
                  <h3 style="font-family: var(--font-serif); font-size: 14px; font-weight: 600; color: var(--c-burgundy); margin: 0 0 4px 0; line-height: 1.2;">{{ item.dupeName }}</h3>
                  <div style="font-weight: 700; color: var(--c-green); font-size: 16px;">{{ item.dupePrice }}</div>
                </div>
              </div>

              <!-- Reviews -->
              <div style="padding: 16px;">
                <h4 style="font-size: 12px; font-weight: 600; color: var(--text-primary); text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 12px 0; display: flex; align-items: center; gap: 4px;">
                  <mat-icon style="font-size: 16px; width: 16px; height: 16px; color: #FFB400;">star</mat-icon>
                  What the girlies are saying
                </h4>
                <div style="display: flex; flex-direction: column; gap: 8px;">
                  @for (review of item.reviews; track review) {
                    <div style="background: #f9f9f9; padding: 12px; border-radius: var(--radius-sm); font-size: 13px; color: var(--text-secondary); font-style: italic; position: relative;">
                      <span style="color: var(--c-pink-pop); font-size: 24px; position: absolute; top: -4px; left: 4px; opacity: 0.3; font-family: serif;">"</span>
                      <span style="position: relative; z-index: 1; padding-left: 12px; display: block;">{{ review }}</span>
                    </div>
                  }
                </div>
              </div>
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
export class DupeAlertComponent {
  back = output<void>();
  searchQuery = '';
  dupes = signal<DupeItem[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);

  constructor() {
    this.searchDupes('trending viral beauty fashion dupes 2024');
  }

  async searchDupes(query?: string) {
    const q = query || this.searchQuery;
    if (!q.trim()) return;

    this.loading.set(true);
    this.error.set(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env['GEMINI_API_KEY'] as string });
      const prompt = `Find 2 popular dupes for "${q}". For each, provide:
      1. Original product name and price (e.g., "$150")
      2. Dupe product name and price (e.g., "$35")
      3. Calculate the savings (e.g., "$115")
      4. Two short, realistic reviews from consumers comparing the dupe to the original (like TikTok comments).
      5. A descriptive keyword for the original product image (e.g., "dyson hair dryer")
      6. A descriptive keyword for the dupe product image (e.g., "shark hair dryer")
      Return ONLY a valid JSON array of objects with keys: "originalName", "originalPrice", "originalImageKeyword", "dupeName", "dupePrice", "dupeImageKeyword", "savings", "reviews" (array of strings). Do not include markdown formatting.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          tools: [{ googleSearch: {} }],
          responseMimeType: 'application/json',
        }
      });

      let text = response.text || '[]';
      if (text.startsWith('```json')) {
        text = text.replace(/```json/g, '').replace(/```/g, '').trim();
      } else if (text.startsWith('```')) {
        text = text.replace(/```/g, '').trim();
      }

      const parsedDupes = JSON.parse(text);
      
      const formattedDupes = parsedDupes.map((d: { originalName: string, originalPrice: number, originalImageKeyword?: string, dupeName: string, dupePrice: number, dupeImageKeyword?: string, savings: number, reviews: string }) => ({
        originalName: d.originalName,
        originalPrice: d.originalPrice,
        originalImageUrl: `https://picsum.photos/seed/${encodeURIComponent(d.originalImageKeyword || d.originalName)}/300/300`,
        dupeName: d.dupeName,
        dupePrice: d.dupePrice,
        dupeImageUrl: `https://picsum.photos/seed/${encodeURIComponent(d.dupeImageKeyword || d.dupeName)}/300/300`,
        savings: d.savings,
        reviews: d.reviews
      }));

      this.dupes.set(formattedDupes);
    } catch (err: unknown) {
      console.error('Error fetching dupes:', err);
      this.error.set('Could not find dupes right now. Try searching for something else!');
    } finally {
      this.loading.set(false);
    }
  }
}
