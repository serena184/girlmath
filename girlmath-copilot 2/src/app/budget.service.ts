import { Injectable, signal, computed } from '@angular/core';

export interface Envelope {
  id: string;
  name: string;
  allocated: number;
  spent: number;
  icon: string;
  color: string;
  isPositive?: boolean;
}

export interface Transaction {
  id: string;
  envelopeId: string;
  name: string;
  amount: number;
  date: Date;
}

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  monthlyIncome = signal<number | null>(null);
  envelopes = signal<Envelope[]>([]);
  transactions = signal<Transaction[]>([]);
  
  autoSaveEnabled = signal<boolean>(false);
  renewDay = signal<number>(1);

  totalAllocated = computed(() => this.envelopes().filter(e => !e.isPositive).reduce((sum, e) => sum + e.allocated, 0));
  totalSpent = computed(() => this.envelopes().filter(e => !e.isPositive).reduce((sum, e) => sum + e.spent, 0));
  
  totalPositive = computed(() => this.envelopes().filter(e => e.isPositive).reduce((sum, e) => sum + e.spent, 0));
  
  leftToAllocate = computed(() => (this.monthlyIncome() || 0) + this.totalPositive() - this.totalAllocated());

  setIncome(amount: number) {
    this.monthlyIncome.set(amount);
  }

  addEnvelope(envelope: Envelope) {
    this.envelopes.update(envs => [...envs, envelope]);
  }

  logTransaction(transaction: Transaction) {
    this.transactions.update(txs => [transaction, ...txs]);
    
    this.envelopes.update(envs => envs.map(env => {
      if (env.id === transaction.envelopeId) {
        return { ...env, spent: env.spent + transaction.amount };
      }
      return env;
    }));
  }

  renewBudget() {
    this.envelopes.update(envs => envs.map(env => ({ ...env, spent: 0 })));
    this.transactions.set([]);
  }
}
