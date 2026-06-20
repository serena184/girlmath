import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule],
  template: `
    <div class="main-view">
        
        <div style="display: flex; flex-direction: column; align-items: center; text-align: center; gap: var(--space-sm); margin-bottom: var(--space-sm);">
            <div style="position: relative; width: 100px; height: 100px; cursor: pointer;" (click)="fileInput.click()" tabindex="0" (keyup.enter)="fileInput.click()">
                <div style="width: 100%; height: 100%; border-radius: 50%; background-color: var(--c-pink-mid); border: 4px solid white; box-shadow: 0 4px 10px rgba(74, 26, 44, 0.1); display: flex; align-items: center; justify-content: center; color: white; overflow: hidden;">
                    @if (userService.avatarUrl()) {
                        <img [src]="userService.avatarUrl()" style="width: 100%; height: 100%; object-fit: cover;" alt="User Avatar" />
                    } @else {
                        <mat-icon style="font-size: 40px; width: 40px; height: 40px;">face_3</mat-icon>
                    }
                </div>
                <div style="position: absolute; bottom: 0; right: 0; background: var(--c-green); color: white; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid white;">
                    <mat-icon style="font-size: 16px; width: 16px; height: 16px;">photo_camera</mat-icon>
                </div>
            </div>
            <input type="file" #fileInput style="display: none;" accept="image/*" (change)="onFileSelected($event)">
            @if (userService.avatarUrl()) {
                <button (click)="userService.updateAvatar(null)" style="font-size: 11px; color: var(--text-secondary); background: none; border: none; cursor: pointer; text-decoration: underline;">Use default logo</button>
            }

            <div style="display: flex; align-items: center; gap: 8px; justify-content: center; height: 32px;">
                @if (isEditingName()) {
                    <input type="text" [(ngModel)]="editNameValue" (blur)="saveName()" (keyup.enter)="saveName()" style="font-size: 24px; font-weight: 700; text-align: center; border: 1px solid var(--c-pink-light); border-radius: 8px; padding: 0 4px; width: 200px; outline: none; font-family: inherit; color: inherit; background: white;">
                } @else {
                    <h2 style="margin: 0;">{{ userService.name() }}</h2>
                    <mat-icon style="font-size: 16px; width: 16px; height: 16px; color: var(--text-secondary); cursor: pointer;" (click)="startEditingName()">edit</mat-icon>
                }
            </div>
            <p style="margin:0; font-family:var(--font-serif); color:var(--text-secondary);">Spending Enthusiast</p>
        </div>

        <div>
            <div style="font-family: var(--font-serif); font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: var(--text-secondary); margin-bottom: var(--space-sm); padding-left: 4px;">App Settings</div>
            <div class="card" style="border: 1px solid rgba(244, 152, 166, 0.1);">
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid rgba(74, 26, 44, 0.05);">
                    <div style="font-weight: 600; font-size: 15px;">Currency</div>
                    <select [ngModel]="settingsService.currency()" (ngModelChange)="settingsService.setCurrency($event)" style="border: 1px solid var(--c-pink-light); border-radius: 8px; padding: 4px 8px; font-size: 14px; outline: none; background: white; color: var(--text-primary);">
                        <option value="USD">USD ($)</option>
                        <option value="EUR">EUR (€)</option>
                        <option value="GBP">GBP (£)</option>
                        <option value="JPY">JPY (¥)</option>
                        <option value="CAD">CAD (C$)</option>
                        <option value="AUD">AUD (A$)</option>
                    </select>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 0;">
                    <div style="font-weight: 600; font-size: 15px;">Language</div>
                    <select [ngModel]="settingsService.language()" (ngModelChange)="settingsService.setLanguage($event)" style="border: 1px solid var(--c-pink-light); border-radius: 8px; padding: 4px 8px; font-size: 14px; outline: none; background: white; color: var(--text-primary);">
                        <option value="en">English</option>
                        <option value="es">Español</option>
                        <option value="fr">Français</option>
                        <option value="de">Deutsch</option>
                        <option value="it">Italiano</option>
                        <option value="pt">Português</option>
                    </select>
                </div>
            </div>
        </div>

        <div>
            <div style="font-family: var(--font-serif); font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: var(--text-secondary); margin-bottom: var(--space-sm); padding-left: 4px;">AI Copilot Context</div>
            <div class="card" style="border: 1px solid rgba(244, 152, 166, 0.1);">
                <p style="font-size: 14px; margin: 0 0 12px 0; font-family: var(--font-serif); line-height: 1.4;">
                    Tell your AI bestie what you're obsessed with so she can give better financial advice.
                </p>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div style="font-size:13px; font-weight:600;">Lifestyle Preferences</div>
                        <div style="position: relative; display: flex; align-items: center;">
                            <input type="text" [(ngModel)]="prefSearch" placeholder="Search or add..." style="border: 1px solid var(--c-pink-light); border-radius: var(--radius-pill); padding: 4px 12px 4px 28px; font-size: 12px; outline: none; width: 120px; transition: width 0.2s;" (keyup.enter)="addCustomPref()">
                            <mat-icon style="font-size: 14px; width: 14px; height: 14px; color: var(--text-secondary); position: absolute; left: 8px;">search</mat-icon>
                        </div>
                    </div>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px;">
                        @for (pref of filteredPrefs(); track pref.id) {
                            <span class="tag" [class.active]="prefs().includes(pref.id)" (click)="togglePref(pref.id)" tabindex="0" (keyup.enter)="togglePref(pref.id)">{{ pref.label }}</span>
                        }
                        @if (filteredPrefs().length === 0 && prefSearch()) {
                            <span class="tag" style="border-style: dashed;" (click)="addCustomPref()" tabindex="0" (keyup.enter)="addCustomPref()">+ Add "{{ prefSearch() }}"</span>
                        }
                    </div>
                </div>
                <div style="display: flex; flex-direction: column; gap: 12px; margin-top:20px;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div style="font-size:13px; font-weight:600;">Favorite Brands</div>
                        <div style="position: relative; display: flex; align-items: center;">
                            <input type="text" [(ngModel)]="brandSearch" placeholder="Search or add..." style="border: 1px solid var(--c-pink-light); border-radius: var(--radius-pill); padding: 4px 12px 4px 28px; font-size: 12px; outline: none; width: 120px; transition: width 0.2s;" (keyup.enter)="addCustomBrand()">
                            <mat-icon style="font-size: 14px; width: 14px; height: 14px; color: var(--text-secondary); position: absolute; left: 8px;">search</mat-icon>
                        </div>
                    </div>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px;">
                        @for (brand of filteredBrands(); track brand.id) {
                            <span class="tag" [class.active]="brands().includes(brand.id)" (click)="toggleBrand(brand.id)" tabindex="0" (keyup.enter)="toggleBrand(brand.id)">{{ brand.label }}</span>
                        }
                        @if (filteredBrands().length === 0 && brandSearch()) {
                            <span class="tag" style="border-style: dashed;" (click)="addCustomBrand()" tabindex="0" (keyup.enter)="addCustomBrand()">+ Add "{{ brandSearch() }}"</span>
                        }
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div style="font-family: var(--font-serif); font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: var(--text-secondary); margin-bottom: var(--space-sm); padding-left: 4px;">Connected Accounts</div>
            <div class="card" style="border: 1px solid rgba(244, 152, 166, 0.1);">
                <div style="display: flex; align-items: center; gap: 12px; padding: 12px 0; border-bottom: 1px solid rgba(74, 26, 44, 0.05);">
                    <div style="width: 36px; height: 36px; border-radius: var(--radius-sm); background: #f0f0f0; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 10px; color: #666;">PLAID</div>
                    <div style="flex:1;">
                        <div style="font-weight:600; font-size:14px;">Chase Bank</div>
                        <div style="font-size:11px; color:var(--c-green); font-family:var(--font-serif);">● Connected</div>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"></path></svg>
                </div>
                <div style="display: flex; align-items: center; gap: 12px; padding: 12px 0;">
                    <div style="width: 36px; height: 36px; border-radius: var(--radius-sm); background: #eef2ff; color: #4338ca; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 10px;">SNAP</div>
                    <div style="flex:1;">
                        <div style="font-weight:600; font-size:14px;">Stock Portfolio</div>
                        <div style="font-size:11px; color:var(--text-secondary); font-family:var(--font-serif);">Disconnected</div>
                    </div>
                    <button style="font-size:12px; font-weight:700; color:var(--c-pink-pop); border:none; background:none; cursor: pointer;">Fix</button>
                </div>
            </div>
        </div>

        <div>
            <div style="font-family: var(--font-serif); font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: var(--text-secondary); margin-bottom: var(--space-sm); padding-left: 4px;">Notifications</div>
            <div class="card" style="border: 1px solid rgba(244, 152, 166, 0.1);">
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid rgba(74, 26, 44, 0.05);">
                    <div style="display: flex; flex-direction: column;">
                        <span style="font-weight: 600; font-size: 15px;">Daily Hype</span>
                        <span style="font-size: 12px; color: var(--text-secondary); font-family: var(--font-serif);">Morning financial affirmations</span>
                    </div>
                    <div class="toggle" [class.on]="hypeOn()" (click)="hypeOn.set(!hypeOn())" tabindex="0" (keyup.enter)="hypeOn.set(!hypeOn())"></div>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 0;">
                    <div style="display: flex; flex-direction: column;">
                        <span style="font-weight: 600; font-size: 15px;">Spend Alerts</span>
                        <span style="font-size: 12px; color: var(--text-secondary); font-family: var(--font-serif);">When you accidentally over-treat</span>
                    </div>
                    <div class="toggle" [class.on]="alertsOn()" (click)="alertsOn.set(!alertsOn())" tabindex="0" (keyup.enter)="alertsOn.set(!alertsOn())"></div>
                </div>
            </div>
        </div>

        <div>
            <div style="font-family: var(--font-serif); font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: var(--text-secondary); margin-bottom: var(--space-sm); padding-left: 4px;">Subscription Status</div>
            <div style="background: linear-gradient(135deg, var(--c-burgundy), #7A4E5C); color: white; padding: 16px; border-radius: var(--radius-md); display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <div style="font-family: var(--font-display); font-size: 18px; margin-bottom: 4px;">Iconic Tier</div>
                    <div style="font-size: 13px; opacity: 0.8; font-family: var(--font-serif);">$2.99/month • Renewing Oct 12</div>
                </div>
                <div style="background: rgba(255,255,255,0.2); padding: 6px 12px; border-radius: var(--radius-pill); font-size: 12px; font-weight: 700;">Active</div>
            </div>
        </div>

        <div>
            <div style="font-family: var(--font-serif); font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: var(--text-secondary); margin-bottom: var(--space-sm); padding-left: 4px; margin-top: var(--space-lg);">Help Center</div>
            <div class="card" style="border: 1px solid rgba(244, 152, 166, 0.1); cursor: pointer;" (click)="openHelpCenter()" tabindex="0" (keyup.enter)="openHelpCenter()">
                <div style="display: flex; align-items: center; gap: 12px; padding: 4px 0;">
                    <div style="width: 36px; height: 36px; border-radius: 50%; background: var(--c-pink-light); color: var(--c-pink-pop); display: flex; align-items: center; justify-content: center;">
                        <mat-icon style="font-size: 20px; width: 20px; height: 20px;">mail</mat-icon>
                    </div>
                    <div style="flex:1;">
                        <div style="font-weight:600; font-size:14px;">Send a Message</div>
                        <div style="font-size:11px; color:var(--text-secondary); font-family:var(--font-serif);">girlmath.themaththatmakescents&#64;gmail.com</div>
                    </div>
                    <mat-icon style="color: var(--text-secondary); font-size: 20px; width: 20px; height: 20px;">chevron_right</mat-icon>
                </div>
            </div>
        </div>

    </div>
  `,
  styles: [`
    .tag {
        background: var(--c-cream-dark);
        padding: 6px 12px;
        border-radius: var(--radius-pill);
        font-size: 13px;
        font-family: var(--font-serif);
        color: var(--text-primary);
        border: 1px solid rgba(74, 26, 44, 0.1);
        cursor: pointer;
        transition: all 0.2s;
    }
    .tag.active {
        background: var(--c-pink-light);
        border-color: var(--c-pink-pop);
    }
    .toggle {
        width: 44px;
        height: 24px;
        background: #E0E0E0;
        border-radius: 12px;
        position: relative;
        transition: background 0.3s;
        cursor: pointer;
    }
    .toggle.on {
        background: var(--c-green);
    }
    .toggle::after {
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        background: white;
        border-radius: 50%;
        top: 2px;
        left: 2px;
        transition: transform 0.3s;
    }
    .toggle.on::after {
        transform: translateX(20px);
    }
    input:focus {
        width: 160px !important;
        border-color: var(--c-pink-pop) !important;
    }
  `]
})
export class ProfileComponent {
  userService = inject(UserService);
  settingsService = inject(SettingsService);

  isEditingName = signal(false);
  editNameValue = '';

  // Available options
  availablePrefs = signal<{id: string, label: string}[]>([
    { id: 'matcha', label: 'Daily Matcha' },
    { id: 'pilates', label: 'Pilates Princess' },
    { id: 'dinner', label: 'Girl Dinner Lover' },
    { id: 'skincare', label: 'Skincare Junkie' },
    { id: 'travel', label: 'Travel Bug' },
    { id: 'coffee', label: 'Iced Coffee Addict' },
    { id: 'vintage', label: 'Vintage Shopper' },
    { id: 'concerts', label: 'Concert Goer' }
  ]);

  availableBrands = signal<{id: string, label: string}[]>([
    { id: 'sephora', label: 'Sephora' },
    { id: 'lululemon', label: 'Lululemon' },
    { id: 'aritzia', label: 'Aritzia' },
    { id: 'alo', label: 'Alo Yoga' },
    { id: 'summer', label: 'Summer Fridays' },
    { id: 'glossier', label: 'Glossier' },
    { id: 'skims', label: 'SKIMS' },
    { id: 'zara', label: 'Zara' }
  ]);

  // Selected options
  prefs = signal<string[]>(['matcha', 'pilates', 'skincare']);
  brands = signal<string[]>(['sephora', 'lululemon', 'aritzia']);
  
  // Search states
  prefSearch = signal<string>('');
  brandSearch = signal<string>('');

  // Computed filtered lists
  filteredPrefs = computed(() => {
    const search = this.prefSearch().toLowerCase();
    if (!search) return this.availablePrefs();
    return this.availablePrefs().filter(p => p.label.toLowerCase().includes(search));
  });

  filteredBrands = computed(() => {
    const search = this.brandSearch().toLowerCase();
    if (!search) return this.availableBrands();
    return this.availableBrands().filter(b => b.label.toLowerCase().includes(search));
  });

  hypeOn = signal(true);
  alertsOn = signal(true);

  startEditingName() {
    this.editNameValue = this.userService.name();
    this.isEditingName.set(true);
  }

  saveName() {
    if (this.editNameValue.trim()) {
      this.userService.updateName(this.editNameValue.trim());
    }
    this.isEditingName.set(false);
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target && typeof e.target.result === 'string') {
          this.userService.updateAvatar(e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  }

  togglePref(prefId: string) {
    if (this.prefs().includes(prefId)) {
      this.prefs.update(p => p.filter(x => x !== prefId));
    } else {
      this.prefs.update(p => [...p, prefId]);
    }
  }

  toggleBrand(brandId: string) {
    if (this.brands().includes(brandId)) {
      this.brands.update(b => b.filter(x => x !== brandId));
    } else {
      this.brands.update(b => [...b, brandId]);
    }
  }

  addCustomPref() {
    const val = this.prefSearch().trim();
    if (val) {
      const newId = val.toLowerCase().replace(/\s+/g, '-');
      // Add to available if not exists
      if (!this.availablePrefs().find(p => p.id === newId)) {
        this.availablePrefs.update(opts => [...opts, { id: newId, label: val }]);
      }
      // Select it
      if (!this.prefs().includes(newId)) {
        this.prefs.update(p => [...p, newId]);
      }
      this.prefSearch.set('');
    }
  }

  addCustomBrand() {
    const val = this.brandSearch().trim();
    if (val) {
      const newId = val.toLowerCase().replace(/\s+/g, '-');
      // Add to available if not exists
      if (!this.availableBrands().find(b => b.id === newId)) {
        this.availableBrands.update(opts => [...opts, { id: newId, label: val }]);
      }
      // Select it
      if (!this.brands().includes(newId)) {
        this.brands.update(b => [...b, newId]);
      }
      this.brandSearch.set('');
    }
  }

  openHelpCenter() {
    window.location.href = 'mailto:girlmath.themaththatmakescents@gmail.com?subject=Help%20with%20GirlMath';
  }
}
