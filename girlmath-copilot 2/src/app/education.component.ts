import { Component, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { LESSONS_DATA, Lesson } from './lessons-data';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="main-view">
        
      @if (!activeLesson()) {
        <div>
            <h1 style="font-size: 28px; line-height: 1.1; margin-bottom: 8px;">Get your <span style="font-style: italic; color: var(--c-pink-pop)">degree</span> in GirlMath.</h1>
            <p style="font-family: var(--font-serif); color: var(--text-secondary); margin: 0;">Financial literacy, but make it aesthetic.</p>
        </div>

        <div>
            <h3 class="mb-md">Daily Lessons</h3>
            <div style="display: flex; gap: var(--space-md); overflow-x: auto; padding-bottom: var(--space-sm); scrollbar-width: none;" class="hide-scrollbar">
                @for (lesson of lessons; track lesson.id) {
                    <div style="min-width: 260px; background: white; border-radius: var(--radius-md); padding: var(--space-md); border: 1px solid var(--c-pink-light); display: flex; flex-direction: column;">
                        <span style="font-size: 10px; font-weight: 700; text-transform: uppercase; color: var(--c-pink-pop); letter-spacing: 0.5px;">{{ lesson.subtitle }}</span>
                        <div style="font-family: var(--font-serif); font-size: 18px; font-weight: 700; margin: 4px 0; display: flex; align-items: center; gap: 4px;">
                            {{ lesson.title }} <mat-icon style="font-size: 18px; width: 18px; height: 18px; color: var(--c-pink-pop);">{{ lesson.icon }}</mat-icon>
                        </div>
                        <p style="font-size: 14px; color: var(--text-secondary); line-height: 1.4; flex-grow: 1;">{{ lesson.description }}</p>
                        
                        @if (lessonGrades()[lesson.id] !== undefined) {
                            <div style="margin-top: 8px; font-size: 12px; font-weight: 600; color: var(--c-green); display: flex; align-items: center; gap: 4px;">
                                <mat-icon style="font-size: 14px; width: 14px; height: 14px;">verified</mat-icon> Grade: {{ lessonGrades()[lesson.id] }}%
                            </div>
                        }
                        
                        <div style="margin-top: var(--space-sm); display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 12px; color: var(--text-secondary);">{{ lesson.readTime }}</span>
                            <button (click)="openLesson(lesson)" style="padding: 6px 12px; border-radius: var(--radius-pill); background: var(--c-pink-light); color: var(--c-burgundy); font-size: 12px; font-weight: 600; text-decoration: none; font-family: var(--font-serif); border: none; cursor: pointer;">
                                {{ lessonGrades()[lesson.id] !== undefined ? 'Review' : 'Start' }}
                            </button>
                        </div>
                    </div>
                }
            </div>
        </div>

        <div style="background-color: var(--c-green); color: var(--c-cream); border-radius: var(--radius-md); padding: var(--space-md);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-md);">
                <h3 style="color: white; margin: 0;">The Vibe Shift</h3>
                <span style="background: rgba(255,255,255,0.2); font-size: 10px; padding: 4px 8px; border-radius: 4px; font-weight: 700;">LIVE UPDATES</span>
            </div>
            
            <div style="background: rgba(255, 255, 255, 0.1); border-radius: var(--radius-sm); padding: var(--space-md); margin-bottom: var(--space-sm);">
                <div style="font-family: var(--font-serif); font-weight: 700; font-size: 15px; margin-bottom: 4px; display: flex; align-items: center; gap: 8px;">
                    <span>Bull Market Energy</span> <mat-icon style="font-size: 18px; width: 18px; height: 18px; color: #a7f3d0;">trending_up</mat-icon>
                </div>
                <div style="font-size: 13px; line-height: 1.5; opacity: 0.9;">
                    Stocks are thriving! The S&amp;P 500 reached a new peak. Basically, everyone is feeling themselves right now. It's a major green flag.
                </div>
            </div>

            <div style="background: rgba(255, 255, 255, 0.1); border-radius: var(--radius-sm); padding: var(--space-md); margin-bottom: var(--space-sm);">
                <div style="font-family: var(--font-serif); font-weight: 700; font-size: 15px; margin-bottom: 4px; display: flex; align-items: center; gap: 8px;">
                    <span>Tech Stocks in their Flop Era?</span> <mat-icon style="font-size: 18px; width: 18px; height: 18px; color: #fecaca;">trending_down</mat-icon>
                </div>
                <div style="font-size: 13px; line-height: 1.5; opacity: 0.9;">
                    Nvidia and Apple had a minor humbled moment today. Don't panic, it's just a seasonal rebrand. Long term vibes are still immaculate.
                </div>
            </div>

            <div style="background: rgba(255, 255, 255, 0.1); border-radius: var(--radius-sm); padding: var(--space-md); margin-bottom: var(--space-sm);">
                <div style="font-family: var(--font-serif); font-weight: 700; font-size: 15px; margin-bottom: 4px; display: flex; align-items: center; gap: 8px;">
                    <span>Interest Rates are Ghosting</span> <mat-icon style="font-size: 18px; width: 18px; height: 18px; color: #e5e7eb;">visibility_off</mat-icon>
                </div>
                <div style="font-size: 13px; line-height: 1.5; opacity: 0.9;">
                    The Fed decided to keep rates where they are. No movement, no updates, just vibes. Your savings account interest is staying high for now!
                </div>
            </div>
        </div>

        <div>
            <h3 class="mb-md">Your Learning Path</h3>
            <div class="card" style="border: 1px solid var(--c-pink-light); display: flex; flex-direction: column; gap: var(--space-sm);">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <div style="width: 48px; height: 48px; background: var(--c-pink-light); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: var(--c-pink-pop);">
                        <mat-icon>diamond</mat-icon>
                    </div>
                    <div>
                        <div style="font-weight: 700; font-family: var(--font-serif);">Investing Foundations</div>
                        <div style="font-size: 12px; color: var(--text-secondary);">{{ completedLessonsCount() }}/{{ lessons.length }} lessons completed</div>
                    </div>
                </div>
                <div style="width: 100%; height: 6px; background: var(--c-cream-dark); border-radius: 3px; margin-top: 8px; position: relative;">
                    <div style="position: absolute; left: 0; top: 0; bottom: 0; background: var(--c-pink-pop); border-radius: 3px; transition: width 0.3s ease;" [style.width.%]="(completedLessonsCount() / lessons.length) * 100"></div>
                </div>
            </div>
        </div>
      } @else {
        <!-- Lesson View -->
        <div style="display: flex; flex-direction: column; height: 100%;">
            <button (click)="closeLesson()" style="background: none; border: none; color: var(--text-secondary); display: flex; align-items: center; gap: 4px; cursor: pointer; padding: 0; margin-bottom: 16px; font-weight: 600;">
                <mat-icon style="font-size: 18px; width: 18px; height: 18px;">arrow_back</mat-icon> Back to Lessons
            </button>

            <h1 style="font-size: 24px; margin-bottom: 4px;">{{ activeLesson()?.title }}</h1>
            <p style="color: var(--c-pink-pop); font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 24px;">{{ activeLesson()?.subtitle }}</p>

            <div class="card" style="margin-bottom: 24px; line-height: 1.6; font-size: 15px;" [innerHTML]="activeLesson()?.content"></div>

            @if (activeLesson()?.chartType === 'line') {
                <div class="card" style="margin-bottom: 24px; background: var(--c-cream-dark); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 32px 16px;">
                    <h4 style="margin-bottom: 16px; font-family: var(--font-serif);">The Magic of Compounding</h4>
                    <!-- CSS-based simple line chart visualization -->
                    <div style="width: 100%; height: 150px; position: relative; border-left: 2px solid var(--text-secondary); border-bottom: 2px solid var(--text-secondary);">
                        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M 0 100 Q 30 90, 50 70 T 100 10" fill="none" stroke="var(--c-pink-pop)" stroke-width="4" />
                            <path d="M 0 100 L 100 80" fill="none" stroke="var(--text-secondary)" stroke-width="2" stroke-dasharray="4" />
                        </svg>
                        <div style="position: absolute; bottom: -20px; left: 0; font-size: 10px; color: var(--text-secondary);">Year 1</div>
                        <div style="position: absolute; bottom: -20px; right: 0; font-size: 10px; color: var(--text-secondary);">Year 10</div>
                        <div style="position: absolute; top: 10px; right: 10px; font-size: 12px; font-weight: 600; color: var(--c-pink-pop);">Invested</div>
                        <div style="position: absolute; top: 70px; right: 10px; font-size: 12px; font-weight: 600; color: var(--text-secondary);">Saved under mattress</div>
                    </div>
                </div>
            } @else if (activeLesson()?.chartType === 'pie') {
                <div class="card" style="margin-bottom: 24px; background: var(--c-cream-dark); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 32px 16px;">
                    <h4 style="margin-bottom: 16px; font-family: var(--font-serif);">Inflation Eating Your Money</h4>
                    <!-- CSS-based simple pie chart visualization -->
                    <div style="width: 120px; height: 120px; border-radius: 50%; background: conic-gradient(var(--c-pink-pop) 0% 70%, var(--text-secondary) 70% 100%); position: relative;">
                        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 60px; height: 60px; background: var(--c-cream-dark); border-radius: 50%;"></div>
                    </div>
                    <div style="display: flex; gap: 16px; margin-top: 16px; font-size: 12px;">
                        <div style="display: flex; align-items: center; gap: 4px;"><div style="width: 12px; height: 12px; background: var(--c-pink-pop); border-radius: 2px;"></div> Purchasing Power</div>
                        <div style="display: flex; align-items: center; gap: 4px;"><div style="width: 12px; height: 12px; background: var(--text-secondary); border-radius: 2px;"></div> Lost to Inflation</div>
                    </div>
                </div>
            }

            @if (!showQuiz()) {
                <button class="btn" style="width: 100%; margin-top: auto;" (click)="startQuiz()">Take the Pop Quiz 📝</button>
            } @else {
                <div class="card" style="border: 2px solid var(--c-pink-pop); margin-top: 24px;">
                    <h3 style="margin-bottom: 16px; font-family: var(--font-serif);">Pop Quiz Time! ✨</h3>
                    
                    @for (q of activeLesson()?.quiz; track $index; let qIndex = $index) {
                        <div style="margin-bottom: 24px;">
                            <p style="font-weight: 600; margin-bottom: 12px;">{{ qIndex + 1 }}. {{ q.question }}</p>
                            <div style="display: flex; flex-direction: column; gap: 8px;">
                                @for (opt of q.options; track $index; let optIndex = $index) {
                                    <div class="quiz-option" 
                                         [class.selected]="selectedAnswers()[qIndex] === optIndex && !quizSubmitted()"
                                         [class.correct]="quizSubmitted() && optIndex === q.correctIndex"
                                         [class.incorrect]="quizSubmitted() && selectedAnswers()[qIndex] === optIndex && optIndex !== q.correctIndex"
                                         (click)="selectAnswer(qIndex, optIndex)"
                                         tabindex="0"
                                         (keyup.enter)="selectAnswer(qIndex, optIndex)">
                                        {{ opt }}
                                    </div>
                                }
                            </div>
                        </div>
                    }

                    @if (!quizSubmitted()) {
                        <button class="btn" style="width: 100%; margin-top: 16px;" 
                                [disabled]="objectKeys(selectedAnswers()).length !== activeLesson()?.quiz?.length"
                                (click)="submitQuiz()">Submit Answers</button>
                    } @else {
                        <div style="text-align: center; margin-top: 24px; padding: 16px; background: var(--c-cream-dark); border-radius: var(--radius-md);">
                            <div style="font-size: 32px; font-weight: 800; color: var(--c-burgundy); margin-bottom: 8px;">{{ quizResult() }}%</div>
                            <button class="btn btn-outline" style="margin-top: 12px;" (click)="closeLesson()">Back to Lessons</button>
                        </div>
                    }
                </div>
            }
        </div>
      }
    </div>
  `,
  styles: [`
    .quiz-option {
        padding: 12px 16px;
        border: 2px solid rgba(74, 26, 44, 0.1);
        border-radius: var(--radius-md);
        cursor: pointer;
        transition: all 0.2s;
        font-size: 14px;
        background: white;
    }
    .quiz-option:hover:not(.correct):not(.incorrect) {
        border-color: var(--c-pink-pop);
        background: var(--c-pink-light);
    }
    .quiz-option.selected {
        border-color: var(--c-pink-pop);
        background: var(--c-pink-light);
        font-weight: 600;
    }
    .quiz-option.correct {
        border-color: var(--c-green);
        background: rgba(46, 125, 50, 0.1);
        color: var(--c-green);
        font-weight: 600;
    }
    .quiz-option.incorrect {
        border-color: #d32f2f;
        background: rgba(211, 47, 47, 0.1);
        color: #d32f2f;
        text-decoration: line-through;
    }
  `]
})
export class EducationComponent {
  back = output<void>();
  objectKeys = Object.keys;

  lessons: Lesson[] = LESSONS_DATA;

  activeLesson = signal<Lesson | null>(null);
  showQuiz = signal(false);
  selectedAnswers = signal<Record<number, number>>({});
  quizSubmitted = signal(false);
  quizResult = signal<number | null>(null);
  
  // Store grades: { lessonId: grade }
  lessonGrades = signal<Record<string, number>>({});

  completedLessonsCount() {
    return Object.keys(this.lessonGrades()).length;
  }

  openLesson(lesson: Lesson) {
    this.activeLesson.set(lesson);
    this.showQuiz.set(false);
    this.selectedAnswers.set({});
    this.quizSubmitted.set(false);
    this.quizResult.set(null);
  }

  closeLesson() {
    this.activeLesson.set(null);
  }

  startQuiz() {
    this.showQuiz.set(true);
  }

  selectAnswer(questionIndex: number, optionIndex: number) {
    if (this.quizSubmitted()) return;
    this.selectedAnswers.update(curr => ({ ...curr, [questionIndex]: optionIndex }));
  }

  submitQuiz() {
    const lesson = this.activeLesson();
    if (!lesson) return;

    let correct = 0;
    lesson.quiz.forEach((q, i) => {
      if (this.selectedAnswers()[i] === q.correctIndex) {
        correct++;
      }
    });

    const grade = Math.round((correct / lesson.quiz.length) * 100);
    this.quizResult.set(grade);
    this.quizSubmitted.set(true);
    
    // Save the highest grade
    const currentGrades = this.lessonGrades();
    const existingGrade = currentGrades[lesson.id] || 0;
    if (grade > existingGrade) {
      this.lessonGrades.update(grades => ({
        ...grades,
        [lesson.id]: grade
      }));
    }
  }
}
