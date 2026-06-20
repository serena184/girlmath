import { Injectable, signal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class UserService {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  name = signal<string>(this.isBrowser ? (localStorage.getItem('gm_userName') || 'Bestie Madison') : 'Bestie Madison');
  avatarUrl = signal<string | null>(this.isBrowser ? (localStorage.getItem('gm_userAvatar') || null) : null);

  updateName(newName: string) {
    this.name.set(newName);
    if (this.isBrowser) {
      localStorage.setItem('gm_userName', newName);
    }
  }

  updateAvatar(url: string | null) {
    this.avatarUrl.set(url);
    if (this.isBrowser) {
      if (url) {
        localStorage.setItem('gm_userAvatar', url);
      } else {
        localStorage.removeItem('gm_userAvatar');
      }
    }
  }
}
