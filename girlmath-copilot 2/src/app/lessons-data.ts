export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

export interface Lesson {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  readTime: string;
  icon: string;
  content: string;
  chartType?: "bar" | "line" | "pie";
  quiz: QuizQuestion[];
}

export const LESSONS_DATA: Lesson[] = [
  {
    "id": "l1",
    "title": "Compound Interest",
    "subtitle": "Basics 101",
    "description": "Everything you need to know about Compound Interest, explained in a way that actually makes sense.",
    "readTime": "12 min read",
    "icon": "trending_up",
    "chartType": "line",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: Compound Interest</h3><p style=\"margin-bottom: 16px;\">Let's talk about Compound Interest. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding Compound Interest gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? Compound Interest is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">Compound Interest is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind Compound Interest?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l2",
    "title": "Inflation Core",
    "subtitle": "The Economy",
    "description": "Everything you need to know about Inflation Core, explained in a way that actually makes sense.",
    "readTime": "14 min read",
    "icon": "payments",
    "chartType": "pie",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: Inflation Core</h3><p style=\"margin-bottom: 16px;\">Let's talk about Inflation Core. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding Inflation Core gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? Inflation Core is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">Inflation Core is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind Inflation Core?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l3",
    "title": "The 50/30/20 Rule",
    "subtitle": "Budgeting",
    "description": "Everything you need to know about The 50/30/20 Rule, explained in a way that actually makes sense.",
    "readTime": "11 min read",
    "icon": "pie_chart",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: The 50/30/20 Rule</h3><p style=\"margin-bottom: 16px;\">Let's talk about The 50/30/20 Rule. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding The 50/30/20 Rule gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? The 50/30/20 Rule is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">The 50/30/20 Rule is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind The 50/30/20 Rule?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l4",
    "title": "Emergency Funds",
    "subtitle": "Safety Net",
    "description": "Everything you need to know about Emergency Funds, explained in a way that actually makes sense.",
    "readTime": "12 min read",
    "icon": "health_and_safety",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: Emergency Funds</h3><p style=\"margin-bottom: 16px;\">Let's talk about Emergency Funds. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding Emergency Funds gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? Emergency Funds is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">Emergency Funds is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind Emergency Funds?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l5",
    "title": "Credit Scores",
    "subtitle": "Adulting GPA",
    "description": "Everything you need to know about Credit Scores, explained in a way that actually makes sense.",
    "readTime": "9 min read",
    "icon": "score",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: Credit Scores</h3><p style=\"margin-bottom: 16px;\">Let's talk about Credit Scores. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding Credit Scores gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? Credit Scores is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">Credit Scores is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind Credit Scores?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l6",
    "title": "Credit vs Debit",
    "subtitle": "Plastic Money",
    "description": "Everything you need to know about Credit vs Debit, explained in a way that actually makes sense.",
    "readTime": "6 min read",
    "icon": "credit_card",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: Credit vs Debit</h3><p style=\"margin-bottom: 16px;\">Let's talk about Credit vs Debit. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding Credit vs Debit gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? Credit vs Debit is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">Credit vs Debit is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind Credit vs Debit?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l7",
    "title": "HYSA Explained",
    "subtitle": "Savings",
    "description": "Everything you need to know about HYSA Explained, explained in a way that actually makes sense.",
    "readTime": "14 min read",
    "icon": "savings",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: HYSA Explained</h3><p style=\"margin-bottom: 16px;\">Let's talk about HYSA Explained. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding HYSA Explained gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? HYSA Explained is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">HYSA Explained is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind HYSA Explained?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l8",
    "title": "Index Funds",
    "subtitle": "Investing",
    "description": "Everything you need to know about Index Funds, explained in a way that actually makes sense.",
    "readTime": "9 min read",
    "icon": "show_chart",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: Index Funds</h3><p style=\"margin-bottom: 16px;\">Let's talk about Index Funds. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding Index Funds gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? Index Funds is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">Index Funds is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind Index Funds?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l9",
    "title": "ETFs vs Mutual Funds",
    "subtitle": "Investing",
    "description": "Everything you need to know about ETFs vs Mutual Funds, explained in a way that actually makes sense.",
    "readTime": "14 min read",
    "icon": "compare_arrows",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: ETFs vs Mutual Funds</h3><p style=\"margin-bottom: 16px;\">Let's talk about ETFs vs Mutual Funds. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding ETFs vs Mutual Funds gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? ETFs vs Mutual Funds is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">ETFs vs Mutual Funds is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind ETFs vs Mutual Funds?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l10",
    "title": "401(k) & Matching",
    "subtitle": "Retirement",
    "description": "Everything you need to know about 401(k) & Matching, explained in a way that actually makes sense.",
    "readTime": "8 min read",
    "icon": "work",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: 401(k) & Matching</h3><p style=\"margin-bottom: 16px;\">Let's talk about 401(k) & Matching. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding 401(k) & Matching gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? 401(k) & Matching is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">401(k) & Matching is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind 401(k) & Matching?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l11",
    "title": "Roth vs Traditional IRA",
    "subtitle": "Retirement",
    "description": "Everything you need to know about Roth vs Traditional IRA, explained in a way that actually makes sense.",
    "readTime": "7 min read",
    "icon": "account_balance",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: Roth vs Traditional IRA</h3><p style=\"margin-bottom: 16px;\">Let's talk about Roth vs Traditional IRA. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding Roth vs Traditional IRA gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? Roth vs Traditional IRA is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">Roth vs Traditional IRA is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind Roth vs Traditional IRA?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l12",
    "title": "Taxes 101",
    "subtitle": "Adulting",
    "description": "Everything you need to know about Taxes 101, explained in a way that actually makes sense.",
    "readTime": "14 min read",
    "icon": "receipt_long",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: Taxes 101</h3><p style=\"margin-bottom: 16px;\">Let's talk about Taxes 101. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding Taxes 101 gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? Taxes 101 is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">Taxes 101 is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind Taxes 101?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l13",
    "title": "Student Loans",
    "subtitle": "Debt",
    "description": "Everything you need to know about Student Loans, explained in a way that actually makes sense.",
    "readTime": "7 min read",
    "icon": "school",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: Student Loans</h3><p style=\"margin-bottom: 16px;\">Let's talk about Student Loans. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding Student Loans gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? Student Loans is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">Student Loans is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind Student Loans?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l14",
    "title": "Mortgages",
    "subtitle": "Real Estate",
    "description": "Everything you need to know about Mortgages, explained in a way that actually makes sense.",
    "readTime": "5 min read",
    "icon": "home",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: Mortgages</h3><p style=\"margin-bottom: 16px;\">Let's talk about Mortgages. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding Mortgages gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? Mortgages is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">Mortgages is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind Mortgages?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l15",
    "title": "Renting vs Buying",
    "subtitle": "Real Estate",
    "description": "Everything you need to know about Renting vs Buying, explained in a way that actually makes sense.",
    "readTime": "13 min read",
    "icon": "real_estate_agent",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: Renting vs Buying</h3><p style=\"margin-bottom: 16px;\">Let's talk about Renting vs Buying. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding Renting vs Buying gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? Renting vs Buying is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">Renting vs Buying is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind Renting vs Buying?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l16",
    "title": "Car Loans",
    "subtitle": "Auto",
    "description": "Everything you need to know about Car Loans, explained in a way that actually makes sense.",
    "readTime": "14 min read",
    "icon": "directions_car",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: Car Loans</h3><p style=\"margin-bottom: 16px;\">Let's talk about Car Loans. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding Car Loans gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? Car Loans is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">Car Loans is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind Car Loans?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l17",
    "title": "Leasing vs Buying",
    "subtitle": "Auto",
    "description": "Everything you need to know about Leasing vs Buying, explained in a way that actually makes sense.",
    "readTime": "8 min read",
    "icon": "car_rental",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: Leasing vs Buying</h3><p style=\"margin-bottom: 16px;\">Let's talk about Leasing vs Buying. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding Leasing vs Buying gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? Leasing vs Buying is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">Leasing vs Buying is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind Leasing vs Buying?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l18",
    "title": "Insurance Basics",
    "subtitle": "Protection",
    "description": "Everything you need to know about Insurance Basics, explained in a way that actually makes sense.",
    "readTime": "10 min read",
    "icon": "shield",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: Insurance Basics</h3><p style=\"margin-bottom: 16px;\">Let's talk about Insurance Basics. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding Insurance Basics gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? Insurance Basics is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">Insurance Basics is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind Insurance Basics?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l19",
    "title": "Salary Negotiation",
    "subtitle": "Career",
    "description": "Everything you need to know about Salary Negotiation, explained in a way that actually makes sense.",
    "readTime": "6 min read",
    "icon": "attach_money",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: Salary Negotiation</h3><p style=\"margin-bottom: 16px;\">Let's talk about Salary Negotiation. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding Salary Negotiation gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? Salary Negotiation is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">Salary Negotiation is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind Salary Negotiation?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l20",
    "title": "Side Hustles",
    "subtitle": "Income",
    "description": "Everything you need to know about Side Hustles, explained in a way that actually makes sense.",
    "readTime": "13 min read",
    "icon": "work_outline",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: Side Hustles</h3><p style=\"margin-bottom: 16px;\">Let's talk about Side Hustles. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding Side Hustles gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? Side Hustles is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">Side Hustles is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind Side Hustles?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l21",
    "title": "Crypto Basics",
    "subtitle": "Web3",
    "description": "Everything you need to know about Crypto Basics, explained in a way that actually makes sense.",
    "readTime": "13 min read",
    "icon": "currency_bitcoin",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: Crypto Basics</h3><p style=\"margin-bottom: 16px;\">Let's talk about Crypto Basics. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding Crypto Basics gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? Crypto Basics is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">Crypto Basics is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind Crypto Basics?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l22",
    "title": "FIRE Movement",
    "subtitle": "Retirement",
    "description": "Everything you need to know about FIRE Movement, explained in a way that actually makes sense.",
    "readTime": "11 min read",
    "icon": "local_fire_department",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: FIRE Movement</h3><p style=\"margin-bottom: 16px;\">Let's talk about FIRE Movement. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding FIRE Movement gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? FIRE Movement is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">FIRE Movement is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind FIRE Movement?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l23",
    "title": "Snowball vs Avalanche",
    "subtitle": "Debt Payoff",
    "description": "Everything you need to know about Snowball vs Avalanche, explained in a way that actually makes sense.",
    "readTime": "8 min read",
    "icon": "ac_unit",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: Snowball vs Avalanche</h3><p style=\"margin-bottom: 16px;\">Let's talk about Snowball vs Avalanche. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding Snowball vs Avalanche gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? Snowball vs Avalanche is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">Snowball vs Avalanche is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind Snowball vs Avalanche?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l24",
    "title": "Good vs Bad Debt",
    "subtitle": "Debt",
    "description": "Everything you need to know about Good vs Bad Debt, explained in a way that actually makes sense.",
    "readTime": "11 min read",
    "icon": "balance",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: Good vs Bad Debt</h3><p style=\"margin-bottom: 16px;\">Let's talk about Good vs Bad Debt. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding Good vs Bad Debt gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? Good vs Bad Debt is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">Good vs Bad Debt is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind Good vs Bad Debt?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l25",
    "title": "Net Worth",
    "subtitle": "Wealth",
    "description": "Everything you need to know about Net Worth, explained in a way that actually makes sense.",
    "readTime": "5 min read",
    "icon": "account_balance_wallet",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: Net Worth</h3><p style=\"margin-bottom: 16px;\">Let's talk about Net Worth. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding Net Worth gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? Net Worth is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">Net Worth is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind Net Worth?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l26",
    "title": "Diversification",
    "subtitle": "Investing",
    "description": "Everything you need to know about Diversification, explained in a way that actually makes sense.",
    "readTime": "11 min read",
    "icon": "call_split",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: Diversification</h3><p style=\"margin-bottom: 16px;\">Let's talk about Diversification. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding Diversification gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? Diversification is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">Diversification is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind Diversification?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l27",
    "title": "Risk Tolerance",
    "subtitle": "Investing",
    "description": "Everything you need to know about Risk Tolerance, explained in a way that actually makes sense.",
    "readTime": "13 min read",
    "icon": "warning",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: Risk Tolerance</h3><p style=\"margin-bottom: 16px;\">Let's talk about Risk Tolerance. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding Risk Tolerance gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? Risk Tolerance is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">Risk Tolerance is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind Risk Tolerance?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l28",
    "title": "Bull vs Bear Markets",
    "subtitle": "The Economy",
    "description": "Everything you need to know about Bull vs Bear Markets, explained in a way that actually makes sense.",
    "readTime": "13 min read",
    "icon": "pets",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: Bull vs Bear Markets</h3><p style=\"margin-bottom: 16px;\">Let's talk about Bull vs Bear Markets. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding Bull vs Bear Markets gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? Bull vs Bear Markets is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">Bull vs Bear Markets is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind Bull vs Bear Markets?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l29",
    "title": "Dividends",
    "subtitle": "Investing",
    "description": "Everything you need to know about Dividends, explained in a way that actually makes sense.",
    "readTime": "6 min read",
    "icon": "payments",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: Dividends</h3><p style=\"margin-bottom: 16px;\">Let's talk about Dividends. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding Dividends gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? Dividends is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">Dividends is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind Dividends?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l30",
    "title": "Dollar Cost Averaging",
    "subtitle": "Investing",
    "description": "Everything you need to know about Dollar Cost Averaging, explained in a way that actually makes sense.",
    "readTime": "6 min read",
    "icon": "schedule",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: Dollar Cost Averaging</h3><p style=\"margin-bottom: 16px;\">Let's talk about Dollar Cost Averaging. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding Dollar Cost Averaging gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? Dollar Cost Averaging is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">Dollar Cost Averaging is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind Dollar Cost Averaging?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l31",
    "title": "Recessions",
    "subtitle": "The Economy",
    "description": "Everything you need to know about Recessions, explained in a way that actually makes sense.",
    "readTime": "10 min read",
    "icon": "trending_down",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: Recessions</h3><p style=\"margin-bottom: 16px;\">Let's talk about Recessions. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding Recessions gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? Recessions is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">Recessions is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind Recessions?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l32",
    "title": "The Federal Reserve",
    "subtitle": "The Economy",
    "description": "Everything you need to know about The Federal Reserve, explained in a way that actually makes sense.",
    "readTime": "10 min read",
    "icon": "account_balance",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: The Federal Reserve</h3><p style=\"margin-bottom: 16px;\">Let's talk about The Federal Reserve. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding The Federal Reserve gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? The Federal Reserve is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">The Federal Reserve is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind The Federal Reserve?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l33",
    "title": "Interest Rates",
    "subtitle": "The Economy",
    "description": "Everything you need to know about Interest Rates, explained in a way that actually makes sense.",
    "readTime": "9 min read",
    "icon": "percent",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: Interest Rates</h3><p style=\"margin-bottom: 16px;\">Let's talk about Interest Rates. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding Interest Rates gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? Interest Rates is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">Interest Rates is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind Interest Rates?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l34",
    "title": "Bonds",
    "subtitle": "Investing",
    "description": "Everything you need to know about Bonds, explained in a way that actually makes sense.",
    "readTime": "8 min read",
    "icon": "request_quote",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: Bonds</h3><p style=\"margin-bottom: 16px;\">Let's talk about Bonds. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding Bonds gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? Bonds is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">Bonds is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind Bonds?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l35",
    "title": "Options Trading",
    "subtitle": "Advanced",
    "description": "Everything you need to know about Options Trading, explained in a way that actually makes sense.",
    "readTime": "14 min read",
    "icon": "casino",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: Options Trading</h3><p style=\"margin-bottom: 16px;\">Let's talk about Options Trading. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding Options Trading gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? Options Trading is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">Options Trading is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind Options Trading?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l36",
    "title": "Margin Trading",
    "subtitle": "Advanced",
    "description": "Everything you need to know about Margin Trading, explained in a way that actually makes sense.",
    "readTime": "10 min read",
    "icon": "money_off",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: Margin Trading</h3><p style=\"margin-bottom: 16px;\">Let's talk about Margin Trading. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding Margin Trading gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? Margin Trading is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">Margin Trading is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind Margin Trading?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l37",
    "title": "IPOs",
    "subtitle": "Investing",
    "description": "Everything you need to know about IPOs, explained in a way that actually makes sense.",
    "readTime": "10 min read",
    "icon": "new_releases",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: IPOs</h3><p style=\"margin-bottom: 16px;\">Let's talk about IPOs. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding IPOs gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? IPOs is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">IPOs is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind IPOs?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l38",
    "title": "Market Cap",
    "subtitle": "Investing",
    "description": "Everything you need to know about Market Cap, explained in a way that actually makes sense.",
    "readTime": "8 min read",
    "icon": "pie_chart_outline",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: Market Cap</h3><p style=\"margin-bottom: 16px;\">Let's talk about Market Cap. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding Market Cap gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? Market Cap is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">Market Cap is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind Market Cap?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l39",
    "title": "P/E Ratio",
    "subtitle": "Investing",
    "description": "Everything you need to know about P/E Ratio, explained in a way that actually makes sense.",
    "readTime": "12 min read",
    "icon": "calculate",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: P/E Ratio</h3><p style=\"margin-bottom: 16px;\">Let's talk about P/E Ratio. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding P/E Ratio gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? P/E Ratio is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">P/E Ratio is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind P/E Ratio?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l40",
    "title": "ESG Investing",
    "subtitle": "Investing",
    "description": "Everything you need to know about ESG Investing, explained in a way that actually makes sense.",
    "readTime": "11 min read",
    "icon": "eco",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: ESG Investing</h3><p style=\"margin-bottom: 16px;\">Let's talk about ESG Investing. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding ESG Investing gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? ESG Investing is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">ESG Investing is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind ESG Investing?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l41",
    "title": "Real Estate Investing",
    "subtitle": "Real Estate",
    "description": "Everything you need to know about Real Estate Investing, explained in a way that actually makes sense.",
    "readTime": "10 min read",
    "icon": "location_city",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: Real Estate Investing</h3><p style=\"margin-bottom: 16px;\">Let's talk about Real Estate Investing. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding Real Estate Investing gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? Real Estate Investing is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">Real Estate Investing is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind Real Estate Investing?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l42",
    "title": "REITs",
    "subtitle": "Real Estate",
    "description": "Everything you need to know about REITs, explained in a way that actually makes sense.",
    "readTime": "7 min read",
    "icon": "domain",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: REITs</h3><p style=\"margin-bottom: 16px;\">Let's talk about REITs. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding REITs gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? REITs is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">REITs is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind REITs?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l43",
    "title": "House Hacking",
    "subtitle": "Real Estate",
    "description": "Everything you need to know about House Hacking, explained in a way that actually makes sense.",
    "readTime": "7 min read",
    "icon": "house",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: House Hacking</h3><p style=\"margin-bottom: 16px;\">Let's talk about House Hacking. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding House Hacking gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? House Hacking is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">House Hacking is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind House Hacking?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l44",
    "title": "Frugality vs Cheapness",
    "subtitle": "Mindset",
    "description": "Everything you need to know about Frugality vs Cheapness, explained in a way that actually makes sense.",
    "readTime": "14 min read",
    "icon": "savings",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: Frugality vs Cheapness</h3><p style=\"margin-bottom: 16px;\">Let's talk about Frugality vs Cheapness. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding Frugality vs Cheapness gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? Frugality vs Cheapness is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">Frugality vs Cheapness is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind Frugality vs Cheapness?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l45",
    "title": "Lifestyle Creep",
    "subtitle": "Mindset",
    "description": "Everything you need to know about Lifestyle Creep, explained in a way that actually makes sense.",
    "readTime": "14 min read",
    "icon": "trending_up",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: Lifestyle Creep</h3><p style=\"margin-bottom: 16px;\">Let's talk about Lifestyle Creep. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding Lifestyle Creep gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? Lifestyle Creep is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">Lifestyle Creep is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind Lifestyle Creep?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l46",
    "title": "Sinking Funds",
    "subtitle": "Budgeting",
    "description": "Everything you need to know about Sinking Funds, explained in a way that actually makes sense.",
    "readTime": "8 min read",
    "icon": "water_drop",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: Sinking Funds</h3><p style=\"margin-bottom: 16px;\">Let's talk about Sinking Funds. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding Sinking Funds gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? Sinking Funds is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">Sinking Funds is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind Sinking Funds?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l47",
    "title": "Financial Infidelity",
    "subtitle": "Relationships",
    "description": "Everything you need to know about Financial Infidelity, explained in a way that actually makes sense.",
    "readTime": "6 min read",
    "icon": "favorite_border",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: Financial Infidelity</h3><p style=\"margin-bottom: 16px;\">Let's talk about Financial Infidelity. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding Financial Infidelity gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? Financial Infidelity is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">Financial Infidelity is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind Financial Infidelity?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l48",
    "title": "Prenups",
    "subtitle": "Relationships",
    "description": "Everything you need to know about Prenups, explained in a way that actually makes sense.",
    "readTime": "6 min read",
    "icon": "gavel",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: Prenups</h3><p style=\"margin-bottom: 16px;\">Let's talk about Prenups. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding Prenups gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? Prenups is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">Prenups is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind Prenups?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l49",
    "title": "Trusts & Wills",
    "subtitle": "Estate Planning",
    "description": "Everything you need to know about Trusts & Wills, explained in a way that actually makes sense.",
    "readTime": "14 min read",
    "icon": "description",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: Trusts & Wills</h3><p style=\"margin-bottom: 16px;\">Let's talk about Trusts & Wills. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding Trusts & Wills gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? Trusts & Wills is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">Trusts & Wills is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind Trusts & Wills?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "l50",
    "title": "Financial Advisors",
    "subtitle": "Help",
    "description": "Everything you need to know about Financial Advisors, explained in a way that actually makes sense.",
    "readTime": "8 min read",
    "icon": "support_agent",
    "content": "<h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 0; margin-bottom: 12px;\">I. The Basics: Financial Advisors</h3><p style=\"margin-bottom: 16px;\">Let's talk about Financial Advisors. It might sound complicated, but it's actually super straightforward when you break it down. Think of it as the foundation of your financial glow-up.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">II. Why You Should Care</h3><p style=\"margin-bottom: 16px;\">If you ignore this, you're basically leaving money on the table. Understanding Financial Advisors gives you the power to make decisions that actually benefit your future self instead of just surviving until the next payday.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">III. Girl Math Application</h3><p style=\"margin-bottom: 16px;\">Imagine you're at Sephora. You wouldn't buy a product without checking the reviews, right? Financial Advisors is like reading the reviews for your money. It helps you avoid the flops and invest in the holy grails.</p><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">IV. How to Actually Start</h3><ul style=\"margin-bottom: 16px; padding-left: 20px;\"><li style=\"margin-bottom: 8px;\"><strong>Step 1:</strong> Do your research. Don't just follow random TikTok advice.</li><li style=\"margin-bottom: 8px;\"><strong>Step 2:</strong> Assess your current situation. Be honest with yourself.</li><li style=\"margin-bottom: 8px;\"><strong>Step 3:</strong> Take small, consistent actions. Consistency is key!</li></ul><h3 style=\"font-family: var(--font-serif); color: var(--c-burgundy); margin-top: 24px; margin-bottom: 12px;\">V. The TL;DR</h3><p style=\"margin-bottom: 16px;\">Financial Advisors is essential for your financial wellness era. Master this, and you're one step closer to being that girl who has her life completely together.</p>",
    "quiz": [
      {
        "question": "What is the main concept behind Financial Advisors?",
        "options": [
          "It is a scam to take your money.",
          "It is a foundational element of your financial glow-up.",
          "It is only for finance bros."
        ],
        "correctIndex": 1
      },
      {
        "question": "Why should you care about this topic?",
        "options": [
          "Because leaving money on the table is a flop.",
          "Because it sounds cool at parties.",
          "You shouldn't care."
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the first step to mastering this?",
        "options": [
          "Panic sell everything.",
          "Do your own research.",
          "Ignore it completely."
        ],
        "correctIndex": 1
      }
    ]
  }
];
