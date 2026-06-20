import { Component, signal, ViewChild, ElementRef, AfterViewChecked, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { GoogleGenAI, Chat } from '@google/genai';

interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

interface ISpeechRecognition {
  continuous: boolean;
  interimResults: boolean;
  onstart: () => void;
  onresult: (event: ISpeechRecognitionEvent) => void;
  onerror: (event: { error: string }) => void;
  onend: () => void;
  start: () => void;
  stop: () => void;
}

interface ISpeechRecognitionEvent {
  resultIndex: number;
  results: { isFinal: boolean; [key: number]: { transcript: string } }[] & { length: number };
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatIconModule],
  template: `
    <div class="flex flex-col h-full" style="background-color: var(--bg-app);">
      <div class="chat-container" #scrollContainer>
        @if (messages().length === 0) {
          <div class="chat-bubble bubble-ai">
            <span class="ai-badge">GirlMath Copilot</span>
            <div style="font-family: var(--font-serif);">Hey Bestie! I just saw that $85 charge at Sephora. <mat-icon style="font-size: 14px; width: 14px; height: 14px; vertical-align: middle;">face_3</mat-icon> Don't panic, I'm already crunching the numbers to make it make sense. What's on your mind?</div>
          </div>
        }

        @for (msg of messages(); track $index) {
          <div class="chat-bubble" [class.bubble-user]="msg.role === 'user'" [class.bubble-ai]="msg.role === 'model'">
            @if (msg.role === 'model') {
              <span class="ai-badge">GirlMath Copilot</span>
            }
            <div [style.font-family]="msg.role === 'model' ? 'var(--font-serif)' : 'inherit'" style="white-space: pre-wrap;">
              {{ msg.text }}
            </div>
            @if (msg.role === 'model') {
              <div class="mt-2 flex justify-end">
                <button (click)="speak(msg.text)" style="background:none; border:none; color:var(--c-pink-pop); cursor:pointer; display:flex; align-items:center; gap:4px; font-size:10px; font-weight:600; text-transform:uppercase;">
                  <mat-icon style="font-size:14px; width:14px; height:14px;">volume_up</mat-icon> Listen
                </button>
              </div>
            }
          </div>
        }
        
        @if (isLoading()) {
          <div class="chat-bubble bubble-ai">
            <span class="ai-badge">GirlMath Copilot</span>
            <div style="display: flex; gap: 4px; padding: 4px 0;">
              <div class="w-1.5 h-1.5 bg-[var(--c-pink-pop)] rounded-full animate-bounce" style="animation-delay: 0ms"></div>
              <div class="w-1.5 h-1.5 bg-[var(--c-pink-pop)] rounded-full animate-bounce" style="animation-delay: 150ms"></div>
              <div class="w-1.5 h-1.5 bg-[var(--c-pink-pop)] rounded-full animate-bounce" style="animation-delay: 300ms"></div>
            </div>
          </div>
        }
      </div>

      @if (messages().length === 0) {
        <div class="suggestions-row">
            <button class="suggestion-pill" (click)="setPrompt('Am I broke? 💸')">Am I broke? <mat-icon style="font-size: 14px; width: 14px; height: 14px; vertical-align: middle;">payments</mat-icon></button>
            <button class="suggestion-pill" (click)="setPrompt('Justify this purchase 💅')">Justify this purchase <mat-icon style="font-size: 14px; width: 14px; height: 14px; vertical-align: middle;">face_3</mat-icon></button>
            <button class="suggestion-pill" (click)="setPrompt('Weekend budget?')">Weekend budget?</button>
        </div>
      }

      <div class="input-area">
          <button 
            (click)="toggleListening()"
            style="background:none; border:none; color:var(--c-pink-pop); cursor:pointer; display:flex; align-items:center; justify-content:center;"
            [class.animate-pulse]="isListening()">
            <mat-icon>{{ isListening() ? 'mic' : 'mic_none' }}</mat-icon>
          </button>
          <input 
            type="text" 
            class="chat-input" 
            placeholder="Ask your Bestie..." 
            [formControl]="messageControl"
            (keyup.enter)="sendMessage()"
            [disabled]="isLoading()"
          >
          <button class="send-btn" (click)="sendMessage()" [disabled]="!messageControl.value?.trim() || isLoading()">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </button>
      </div>
    </div>
  `,
  styles: [`
        .chat-container {
            flex: 1;
            overflow-y: auto;
            padding: var(--space-md);
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding-bottom: 20px;
        }

        .chat-bubble {
            max-width: 80%;
            padding: 14px 18px;
            font-size: 15px;
            line-height: 1.5;
            position: relative;
        }

        .bubble-ai {
            align-self: flex-start;
            background: white;
            border-radius: 0 20px 20px 20px;
            border: 1px solid rgba(244, 152, 166, 0.2);
            box-shadow: 0 2px 8px rgba(74, 26, 44, 0.04);
        }

        .bubble-user {
            align-self: flex-end;
            background: var(--c-pink-pop);
            color: white;
            border-radius: 20px 20px 0 20px;
        }

        .ai-badge {
            display: inline-block;
            background: var(--c-green);
            color: white;
            font-size: 9px;
            padding: 2px 6px;
            border-radius: 4px;
            margin-bottom: 6px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .suggestions-row {
            display: flex;
            gap: 10px;
            padding: 0 var(--space-md) 12px var(--space-md);
            overflow-x: auto;
            flex-shrink: 0;
            -webkit-overflow-scrolling: touch;
        }

        .suggestions-row::-webkit-scrollbar {
            display: none;
        }

        .suggestion-pill {
            background: white;
            border: 1px solid var(--c-pink-mid);
            color: var(--c-burgundy);
            padding: 8px 16px;
            border-radius: var(--radius-pill);
            font-size: 13px;
            white-space: nowrap;
            font-family: var(--font-serif);
            font-weight: 600;
            cursor: pointer;
        }

        .input-area {
            background: white;
            padding: 12px var(--space-md) calc(12px + env(safe-area-inset-bottom));
            border-top: 1px solid rgba(74, 26, 44, 0.1);
            display: flex;
            align-items: center;
            gap: 12px;
            flex-shrink: 0;
        }

        .chat-input {
            flex: 1;
            background: var(--c-cream-dark);
            border: none;
            padding: 12px 16px;
            border-radius: var(--radius-pill);
            font-size: 15px;
            outline: none;
            font-family: var(--font-body);
        }

        .send-btn {
            width: 40px;
            height: 40px;
            background: var(--c-green);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            border: none;
            cursor: pointer;
        }
        
        .send-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
  `]
})
export class ChatbotComponent implements AfterViewChecked, OnInit {
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;
  
  messageControl = new FormControl('');
  messages = signal<ChatMessage[]>([]);
  isLoading = signal(false);
  isListening = signal(false);
  
  private chat: Chat;
  private recognition: ISpeechRecognition | null = null;

  constructor() {
    const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
    this.chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: "You are the GirlMath Financial Copilot. You are an expert in finance and a world-class financial educator. Tone: Witty, supportive, and 'anti-shame.' You use Gen-Z/Alpha slang naturally but back it up with hard math. Keep your responses concise (under 3 sentences usually) unless explaining a complex topic. Translate financial concepts into 'Girl Math' analogies. Use emojis to make it girly but don't overdo it."
      }
    });
  }

  ngOnInit() {
    this.initSpeechRecognition();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch {
      // Ignore errors if container is not ready
    }
  }

  setPrompt(prompt: string) {
    this.messageControl.setValue(prompt);
    this.sendMessage();
  }

  initSpeechRecognition() {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as unknown as { SpeechRecognition: new () => ISpeechRecognition }).SpeechRecognition || (window as unknown as { webkitSpeechRecognition: new () => ISpeechRecognition }).webkitSpeechRecognition;
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = true;

      this.recognition.onstart = () => {
        this.isListening.set(true);
      };

      this.recognition.onresult = (event: ISpeechRecognitionEvent) => {
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          }
        }
        
        if (finalTranscript) {
            const currentVal = this.messageControl.value || '';
            this.messageControl.setValue((currentVal + ' ' + finalTranscript).trim());
        }
      };

      this.recognition.onerror = (event: { error: string }) => {
        console.error('Speech recognition error', event.error);
        this.isListening.set(false);
      };

      this.recognition.onend = () => {
        this.isListening.set(false);
      };
    } else {
      console.warn('Speech recognition not supported in this browser.');
    }
  }

  toggleListening() {
    if (this.isListening()) {
      this.recognition?.stop();
    } else {
      if (!this.recognition) {
        this.initSpeechRecognition();
      }
      this.recognition?.start();
    }
  }

  speak(text: string) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Stop any current speech
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Try to find a female voice
      const voices = window.speechSynthesis.getVoices();
      const femaleVoice = voices.find(v => 
        v.name.includes('Female') || 
        v.name.includes('Samantha') || 
        v.name.includes('Google UK English Female') ||
        v.name.includes('Victoria')
      );
      
      if (femaleVoice) {
        utterance.voice = femaleVoice;
      }
      
      utterance.rate = 1.0;
      utterance.pitch = 1.2; // Slightly higher pitch for a more energetic vibe
      window.speechSynthesis.speak(utterance);
    }
  }

  async sendMessage() {
    const text = this.messageControl.value?.trim();
    if (!text || this.isLoading()) return;

    this.messageControl.setValue('');
    this.messages.update(m => [...m, { role: 'user', text }]);
    this.isLoading.set(true);

    try {
      const responseStream = await this.chat.sendMessageStream({ message: text });
      this.messages.update(m => [...m, { role: 'model', text: '' }]);
      
      let fullResponse = '';
      for await (const chunk of responseStream) {
        const c = chunk as { text?: string };
        if (c.text) {
          fullResponse += c.text;
          this.messages.update(m => {
            const newM = [...m];
            newM[newM.length - 1].text = fullResponse;
            return newM;
          });
        }
      }
      
      // Auto-speak the response if we were just listening
      // if (this.isListening()) {
      //   this.speak(fullResponse);
      // }
    } catch (e) {
      console.error(e);
      this.messages.update(m => [...m, { role: 'model', text: 'Oops, my brain just buffered. Try again bestie! ✨' }]);
    } finally {
      this.isLoading.set(false);
    }
  }
}

