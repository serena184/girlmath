import { Injectable, signal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Currency = 'USD' | 'EUR' | 'GBP' | 'JPY' | 'CAD' | 'AUD';
export type Language = 'en' | 'es' | 'fr' | 'de' | 'it' | 'pt';

const CURRENCY_SYMBOLS: Record<Currency, string> = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  JPY: '¥',
  CAD: 'C$',
  AUD: 'A$'
};

@Injectable({ providedIn: 'root' })
export class SettingsService {
  private platformId = inject(PLATFORM_ID);
  
  currency = signal<Currency>('USD');
  language = signal<Language>('en');

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const savedCurrency = localStorage.getItem('girlmath_currency') as Currency;
      if (savedCurrency && CURRENCY_SYMBOLS[savedCurrency]) {
        this.currency.set(savedCurrency);
      }

      const savedLanguage = localStorage.getItem('girlmath_language') as Language;
      if (savedLanguage) {
        this.language.set(savedLanguage);
      }
    }
  }

  get currencySymbol() {
    return CURRENCY_SYMBOLS[this.currency()];
  }

  setCurrency(c: Currency) {
    this.currency.set(c);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('girlmath_currency', c);
    }
  }

  setLanguage(l: Language) {
    this.language.set(l);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('girlmath_language', l);
    }
  }
}
