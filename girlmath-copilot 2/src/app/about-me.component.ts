import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="main-view">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px;">
            <button (click)="back.emit()" style="background: none; border: none; cursor: pointer; display: flex; align-items: center; color: var(--text-primary);">
                <mat-icon>arrow_back</mat-icon>
            </button>
            <h1 class="view-title" style="font-family: var(--font-display); font-size: 24px; margin: 0;">About Us</h1>
            <div style="width: 24px;"></div>
        </div>

        <div style="background: white; border: 1px solid var(--c-pink-light); border-radius: var(--radius-md); padding: var(--space-lg); box-shadow: 0 4px 12px rgba(74, 26, 44, 0.03);">
            <div style="display: flex; justify-content: center; margin-bottom: 24px;">
                <img src="https://i.postimg.cc/1Xk9YNWh/Chat-GPT-Image-Mar-3-2026-05-56-51-PM.png" alt="Serena" referrerpolicy="no-referrer" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; border: 2px solid var(--c-pink-pop); box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
            </div>
            <div class="about-text">
                <p>
                    Girl Math started with a simple frustration: I was genuinely interested in finance, but I didn't recognize myself in the way it was usually explained. I wasn't trying to turn it into a career, I just wanted to understand what was happening, ask questions without feeling stupid, and make smarter choices with my money. Instead, I kept finding explanations that were either painfully dry or delivered with a tone that assumed you should already know everything.
                </p>
                <p>
                    Over time, it became obvious that the problem wasn't my interest, it was the packaging. Money affects everything: your options, your independence, your stress level, your future. But the conversation around it often feels gatekept, and women especially get treated like we're either irresponsible spenders or not credible unless we speak in a certain way. I wanted an approach that felt empowering without pretending life is a spreadsheet.
                </p>
                <p>
                    I've also always cared about budgeting and spending responsibly, but I believe financial health shouldn't come from cutting out every small joy. I want to be intentional, not miserable (yes, the iced coffee stays).
                </p>
                <p>
                    Lastly, I wanted to keep up with markets and finance news in a way that felt clear, current, and actually enjoyable.
                </p>
                <p>
                    <em>“Girl math the math that makes cents”</em> is where all of that comes together: a space built from years of learning and refining, designed to make finance accessible without watering it down.
                </p>
                <p>
                    I hope it works for you, the same way it works for me.
                </p>
                <p style="margin-bottom: 8px;">
                    xoxo,
                </p>
                <div class="signature">
                    Serena
                </div>
            </div>
        </div>
    </div>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
    
    .about-text p {
        font-family: 'Georgia', serif;
        font-size: 15px;
        line-height: 1.6;
        color: #000;
        margin-bottom: 16px;
        text-align: justify;
    }
    
    .signature {
        font-family: 'Great Vibes', cursive;
        font-size: 48px;
        color: #000;
        margin-top: 8px;
        line-height: 1;
        padding-left: 4px;
    }
  `]
})
export class AboutMeComponent {
  back = output<void>();
}
