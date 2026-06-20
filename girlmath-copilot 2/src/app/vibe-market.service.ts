import { Injectable, signal } from '@angular/core';
import { GoogleGenAI } from '@google/genai';

export interface NewsItem {
  title: string;
  girlMathSummary: string;
  fullArticle: string;
  source: string;
  url: string;
  expanded?: boolean;
}

@Injectable({ providedIn: 'root' })
export class VibeMarketService {
  news = signal<NewsItem[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);

  async fetchNews() {
    if (this.news().length > 0) return; // Already fetched

    this.loading.set(true);
    this.error.set(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env['GEMINI_API_KEY'] as string });
      const prompt = `Find 3 of the most recent, hottest stock market or finance news articles from reliable sources. For each article, provide the title, the source name, the URL, a "girl math" summary (explain the financial concept as if you are explaining it to your bestie using shopping/lifestyle analogies, keep it fun and relatable), and a more detailed summary of the full article (but still easy to understand). Return ONLY a valid JSON array of objects with keys: "title", "source", "url", "girlMathSummary", "fullArticle". Do not include markdown formatting like \`\`\`json.`;

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

      const parsedNews = JSON.parse(text);
      this.news.set(parsedNews.map((n: { title: string, summary: string, source: string, impact: 'positive' | 'negative' | 'neutral' }) => ({ ...n, expanded: false })));
    } catch (err: unknown) {
      console.error('Error fetching market news:', err);
      this.error.set('Oops! Could not fetch the latest tea. The market might be sleeping.');
    } finally {
      this.loading.set(false);
    }
  }
}
