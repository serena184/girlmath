import { Injectable, signal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface SavedItem {
  id: string;
  description: string;
  amount: number;
  date: string;
}

@Injectable({ providedIn: 'root' })
export class LogicMathService {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  savedItems = signal<SavedItem[]>([]);
  totalSaved = signal<number>(0);

  constructor() {
    this.loadData();
  }

  private loadData() {
    if (this.isBrowser) {
      const data = localStorage.getItem('gm_logicMathData');
      if (data) {
        try {
          const items = JSON.parse(data);
          this.savedItems.set(items);
          this.calculateTotal(items);
        } catch (e) {
          console.error('Failed to parse logic math data', e);
        }
      }
    }
  }

  private saveData(items: SavedItem[]) {
    if (this.isBrowser) {
      localStorage.setItem('gm_logicMathData', JSON.stringify(items));
    }
  }

  private calculateTotal(items: SavedItem[]) {
    const total = items.reduce((sum, item) => sum + item.amount, 0);
    this.totalSaved.set(total);
  }

  addItem(description: string, amount: number) {
    const newItem: SavedItem = {
      id: Math.random().toString(36).substr(2, 9),
      description,
      amount,
      date: new Date().toISOString()
    };
    
    const currentItems = this.savedItems();
    const newItems = [newItem, ...currentItems];
    
    this.savedItems.set(newItems);
    this.calculateTotal(newItems);
    this.saveData(newItems);
  }

  removeItem(id: string) {
    const currentItems = this.savedItems();
    const newItems = currentItems.filter(item => item.id !== id);
    
    this.savedItems.set(newItems);
    this.calculateTotal(newItems);
    this.saveData(newItems);
  }
}
