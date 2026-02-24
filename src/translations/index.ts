/**
 * translations/index.ts - 多言語翻訳データ管理モジュール
 * 
 * このファイルはアプリケーション全体で使用される翻訳テキストを
 * 一元管理しています。日本語（ja）と英語（en）の2言語に対応。
 * 
 * 構造:
 * - translations オブジェクト: セクション別に翻訳データを格納
 * - 各セクションは { ja: {...}, en: {...} } の形式で言語別データを持つ
 * 
 * 使用方法:
 * ```typescript
 * import { translations } from '../translations';
 * const t = translations.hero[language]; // languageは'ja'または'en'
 * console.log(t.title); // 現在の言語に応じたタイトルを取得
 * ```
 */
export const translations = {
  /**
   * Header Section - ナビゲーションメニューの翻訳
   * 各メニュー項目のラベルテキストを定義
   */
  // Header
  header: {
    ja: {
      about: 'About',
      history: 'History',
      skills: 'Skills',
      projects: 'Projects',
      goals: 'Goals',
    },
    en: {
      about: 'About',
      history: 'History',
      skills: 'Skills',
      projects: 'Projects',
      goals: 'Goals',
    },
  },

  // Profile Section
  profile: {
    ja: {
      name: '飛鳥馬　空',
      title_position: '桃山学院大学 国際教養学部 3年生',
      location: '大阪府',
      bio: 'プログラミング、フランス語、クリエイティブな活動に取り組む。テクノロジーと言語学を組み合わせ、グローバルな視点で価値を創造することを目指しています。',
    },
    en: {
      name: 'Sora Asuma',
      title_position: 'Junior at Momoyama Gakuin University International Liberal Arts',
      location: 'Osaka, Japan',
      bio: ' passionate about programming, French language, and creative activities. I aim to create value from a global perspective by combining technology and linguistics.',
    },
  },

  // Hero Section
  hero: {
    ja: {
      title: 'Technology × Language × Creativity',
      subtitle: '桃山学院大学国際教養学部 テック部 | Developer & Learner',
      description: 'プログラミング、フランス語、AWSを並行して学び、多角的な視点で価値を創造します',
      keywords: ['React', 'Ruby', 'AWS', 'French'],
    },
    en: {
      title: 'Technology × Language × Creativity',
      subtitle: 'Momoyama Gakuin University | Tech Club | Developer & Learner',
      description: 'Learning programming, French, and AWS in parallel, creating value with multiple perspectives',
      keywords: ['React', 'Ruby', 'AWS', 'French'],
    },
  },

  // About Section
  about: {
    ja: {
      sectionTitle: 'About',
      sectionTitleAccent: 'Me',
      sectionSubtitle: '3つの柱で構成される私のアイデンティティ',
      pillars: [
        {
          id: 'engineering',
          title: 'Engineering',
          subtitle: 'AWS / Web Development',
          description: 'クラウドとWebの力で、スケーラブルなソリューションを構築',
          highlights: [
            'AWSクラウドプラクティショナー学習中',
            'React + Vite でモダンなWeb開発',
            'R でデータ処理',
            'Chrome拡張機能開発経験',
          ],
        },
        {
          id: 'linguistics',
          title: 'Linguistics',
          subtitle: 'French Language',
          description: 'フランス語を通じて、グローバルな視野を広げる',
          highlights: [
            '仏検3級に挑戦中',
            'フランス文化への深い関心',
            '多言語コミュニケーション力',
            '継続的な語学学習',
          ],
        },
        {
          id: 'creativity',
          title: 'Creativity',
          subtitle: 'Event / Video',
          description: 'イベント企画と映像制作で、人々に感動を届ける',
          highlights: ['大学イベントの映像制作'],
        },
      ],
    },
    en: {
      sectionTitle: 'About',
      sectionTitleAccent: 'Me',
      sectionSubtitle: 'My identity composed of three pillars',
      pillars: [
        {
          id: 'engineering',
          title: 'Engineering',
          subtitle: 'AWS / Web Development',
          description: 'Building scalable solutions with the power of cloud and web',
          highlights: [
            'Studying for AWS Cloud Practitioner',
            'Modern web development with React + Vite',
            'Data processing with R',
            'Chrome extension development experience',
          ],
        },
        {
          id: 'linguistics',
          title: 'Linguistics',
          subtitle: 'French Language',
          description: 'Expanding global perspectives through French',
          highlights: [
            'Preparing for French Certification Level 3',
            'Deep interest in French culture',
            'Multilingual communication skills',
            'Continuous language learning',
          ],
        },
        {
          id: 'creativity',
          title: 'Creativity',
          subtitle: 'Event / Video',
          description: 'Delivering inspiration through event planning and video production',
          highlights: ['Video production for university events'],
        },
      ],
    },
  },

  // History Section
  history: {
    ja: {
      sectionTitle: 'History',
      sectionTitleAccent: 'Timeline',
      sectionSubtitle: '私の軌跡',
      items: [
        {
          id: 'university-entry',
          period: '2024年4月',
          title: '桃山学院大学 入学',
          category: '国際教養学部',
          description: '桃山学院大学国際教養学部に入学。グローバルな視点と多角的な思考力を養う環境での学習開始。',
          highlights: [
            '国際教養学部での学習開始',
            'テック部への入部',
            'プログラミング学習の開始',
          ],
        },
        {
          id: 'secretary-cert',
          period: '2024年10月',
          title: '秘書技能検定3級取得',
          category: '資格',
          description: 'ビジネススキルとしての秘書技能検定3級に合格。社会人基礎力の養成。',
          highlights: [
            '秘書技能検定3級取得',
            'ビジネスマナーの習得',
            '実務スキルの強化',
          ],
        },
        {
          id: 'programming-start',
          period: '2025年',
          title: 'プログラミング本格学習開始',
          category: '技術',
          description: 'ReactやRubyなどのプログラミング言語の本格的な学習を開始。Web開発スキルの基礎を構築。',
          highlights: [
            'Reactの学習',
            'Rubyの学習開始',
            'Chrome拡張機能の開発経験',
            '英単語学習アプリの開発',
          ],
        },
        {
          id: 'french-cert',
          period: '2025年6月',
          title: '仏検4級合格',
          category: '資格',
          description: 'フランス語検定4級に合格。',
          highlights: [
            '仏検4級取得',
            'フランス語基礎の習得',
            '継続的な語学学習の確立',
          ],
        },
        {
          id: 'aws-start',
          period: '2026年',
          title: 'AWS学習開始',
          category: '技術',
          description: 'クラウドテクノロジーへの興味から、AWSクラウドプラクティショナー認定に向けた学習を開始。',
          highlights: [
            'AWS基礎知識の習得',
            'EC2、S3、IAMの学習',
            'クラウドプラクティショナー認定試験準備中',
          ],
        },
        {
          id: 'portfolio-development',
          period: '2026年〜現在',
          title: 'ポートフォリオサイト開発',
          category: 'プロジェクト',
          description: '自身のスキルと実績を紹介するポートフォリオサイトをReactで開発。最新技術の実装を継続。',
          highlights: [
            'React + Vite による開発',
            'Tailwind CSSでのスタイリング',
            'Framer Motionによるアニメーション実装',
          ],
        },
      ],
    },
    en: {
      sectionTitle: 'History',
      sectionTitleAccent: 'Timeline',
      sectionSubtitle: 'My Journey',
      items: [
        {
          id: 'university-entry',
          period: 'April 2022',
          title: 'Entered Momoyama Gakuin University',
          category: 'Education',
          description: 'Enrolled in the School of International Liberal Arts. Started learning in an environment that fosters global perspectives and multifaceted thinking.',
          highlights: [
            'Began studies in International Liberal Arts',
            'Joined the Tech Club',
            'Started programming learning',
          ],
        },
        {
          id: 'programming-start',
          period: '2023',
          title: 'Started Programming Learning in Earnest',
          category: 'Technology',
          description: 'Began in-depth learning of programming languages such as React and Ruby. Built foundational web development skills.',
          highlights: [
            'Mastered React fundamentals',
            'Started learning Ruby',
            'Gained Chrome extension development experience',
          ],
        },
        {
          id: 'french-cert',
          period: 'June 2023',
          title: 'Passed French Certification Level 4',
          category: 'Certification',
          description: 'Passed the French Certification Level 4 exam. French language learning efforts came to fruition.',
          highlights: [
            'Obtained French Certification Level 4',
            'Mastered French language basics',
            'Established continuous language learning habits',
          ],
        },
        {
          id: 'secretary-cert',
          period: 'November 2023',
          title: 'Obtained Secretary Skills Certification Level 3',
          category: 'Certification',
          description: 'Passed the Secretary Skills Test Grade 3. Developed professional business skills.',
          highlights: [
            'Obtained Secretary Skills Certification Level 3',
            'Mastered business etiquette',
            'Strengthened practical business skills',
          ],
        },
        {
          id: 'aws-start',
          period: '2024',
          title: 'Started AWS Learning',
          category: 'Technology',
          description: 'Began studying for AWS Cloud Practitioner certification due to interest in cloud technology.',
          highlights: [
            'Acquired AWS fundamentals',
            'Learned EC2, S3, and IAM',
            'Preparing for Cloud Practitioner certification exam',
          ],
        },
        {
          id: 'portfolio-development',
          period: '2024 - Present',
          title: 'Portfolio Website Development',
          category: 'Project',
          description: 'Developed a portfolio website with React to showcase skills and accomplishments. Continuously implementing latest technologies.',
          highlights: [
            'Development with React + Vite',
            'Styling with Tailwind CSS',
            'Animation implementation with Framer Motion',
          ],
        },
      ],
    },
  },

  // Skills Section
  skills: {
    ja: {
      sectionTitle: 'My',
      sectionTitleAccent: 'Skills',
      sectionSubtitle: '技術とスキルセット',
      proficiency: '習熟度',
      items: [
        {
          id: 'react',
          name: 'React',
          category: 'Frontend',
          description: 'モダンなUIコンポーネント開発',
          level: 5,
        },
        {
          id: 'aws',
          name: 'AWS',
          category: 'Cloud',
          description: 'クラウドプラクティショナー学習中',
          level: 40,
        },
        {
          id: 'french',
          name: 'French',
          category: 'Language',
          description: '仏検3・4級レベル',
          level: 30,
        },
        {
          id: 'r',
          name: 'R Language',
          category: 'Data Science',
          description: '統計分析・データ可視化',
          level: 60,
        },
        {
          id: 'ruby',
          name: 'Ruby',
          category: 'Backend',
          description: '技術書を活用した基本知識の習得',
          level: 55,
        },
        {
          id: 'secretary',
          name: 'Secretary Certification',
          category: 'Certification',
          description: '秘書技能検定3級取得',
          level: 100,
        },
      ],
    },
    en: {
      sectionTitle: 'My',
      sectionTitleAccent: 'Skills',
      sectionSubtitle: 'Technical skills and competencies',
      proficiency: 'Proficiency',
      items: [
        {
          id: 'react',
          name: 'React',
          category: 'Frontend',
          description: 'Modern UI component development',
          level: 5,
        },
        {
          id: 'aws',
          name: 'AWS',
          category: 'Cloud',
          description: 'Studying for Cloud Practitioner',
          level: 40,
        },
        {
          id: 'french',
          name: 'French',
          category: 'Language',
          description: 'French Certification Level 3-4',
          level: 30,
        },
        {
          id: 'r',
          name: 'R Language',
          category: 'Data Science',
          description: 'Statistical analysis & data visualization',
          level: 60,
        },
        {
          id: 'ruby',
          name: 'Ruby',
          category: 'Backend',
          description: 'Basic knowledge acquisition using technical books',
          level: 55,
        },
        {
          id: 'secretary',
          name: 'Secretary Certification',
          category: 'Certification',
          description: 'Secretary Skills Test Grade 3',
          level: 100,
        },
      ],
    },
  },

  // Projects Section
  projects: {
    ja: {
      sectionTitle: 'Project',
      sectionTitleAccent: 'Highlights',
      sectionSubtitle: 'これまでに取り組んできたプロジェクト',
      viewMore: '詳細を見る',
      close: '閉じる',
      overview: '概要',
      features: '主な特徴',
      technologies: '使用技術',
      link: 'リンク',
      status: {
        completed: '完了',
        'in-progress': '進行中',
        planned: '計画中',
      },
      items: [
        {
          id: 'chrome-extension',
          title: 'Chrome Extension for sg-siken.com',
          titleJa: 'SG試験対策 Chrome拡張',
          description: 'sg-siken.com専用のChrome拡張機能。学習効率を向上させるための機能を実装。',
          tags: ['JavaScript', 'Chrome API', 'Web Extension'],
          status: 'completed',
          highlights: [
            'ユーザビリティ向上機能',
            'カスタムUIの実装',
            'ローカルストレージ活用',
          ],
        },
        {
          id: 'aws-study',
          title: 'AWS Cloud Practitioner Study Log',
          titleJa: 'AWSクラウドプラクティショナー学習ログ',
          description: 'AWSクラウドプラクティショナー認定取得に向けた学習の記録と進捗管理。',
          tags: ['AWS', 'Cloud Computing', 'Certification'],
          status: 'in-progress',
          highlights: [
            'EC2, S3, IAM などの基礎学習',
            '模擬試験での実践練習',
            '継続的な学習習慣の確立',
          ],
        },
        {
          id: 'tango-app',
          title: 'English Word Learning App',
          titleJa: '英単語学習アプリ',
          description: '日本語での意味から英単語を学習するWebアプリ。学習効率を高めるための機能を実装。',
          url: 'https://tango-test.vercel.app/',
          tags: ['React', 'TypeScript', 'Vercel'],
          status: 'completed',
          highlights: [
            'インタラクティブな学習インターフェース',
            'クイズ形式での学習',
            'Vercelでのデプロイメント',
          ],
        },
      ],
    },
    en: {
      sectionTitle: 'Project',
      sectionTitleAccent: 'Highlights',
      sectionSubtitle: 'Projects I have worked on',
      viewMore: 'View Details',
      close: 'Close',
      overview: 'Overview',
      features: 'Key Features',
      technologies: 'Technologies Used',
      link: 'Link',
      status: {
        completed: 'Completed',
        'in-progress': 'In Progress',
        planned: 'Planned',
      },
      items: [
        {
          id: 'chrome-extension',
          title: 'Chrome Extension for sg-siken.com',
          titleJa: 'SG Exam Prep Chrome Extension',
          description: 'A Chrome extension for sg-siken.com. Implemented features to improve learning efficiency.',
          tags: ['JavaScript', 'Chrome API', 'Web Extension'],
          status: 'completed',
          highlights: [
            'User experience improvements',
            'Custom UI implementation',
            'Local storage utilization',
          ],
        },
        {
          id: 'aws-study',
          title: 'AWS Cloud Practitioner Study Log',
          titleJa: 'AWS Cloud Practitioner Study Log',
          description: 'Recording and tracking progress towards AWS Cloud Practitioner certification.',
          tags: ['AWS', 'Cloud Computing', 'Certification'],
          status: 'in-progress',
          highlights: [
            'Learning basics of EC2, S3, IAM',
            'Practice with mock exams',
            'Establishing continuous learning habits',
          ],
        },
        {
          id: 'tango-app',
          title: 'English Word Learning App',
          titleJa: 'English Word Learning App',
          description: 'A web app for learning English words by translating from Japanese meanings. Implemented features to enhance learning efficiency.',
          url: 'https://tango-test.vercel.app/',
          tags: ['React', 'TypeScript', 'Vercel'],
          status: 'completed',
          highlights: [
            'Interactive learning interface',
            'Real-time score tracking',
            'Deployed on Vercel',
          ],
        },
      ],
    },
  },

  // Goal Tracker Section
  goals: {
    ja: {
      sectionTitle: 'Goal',
      sectionTitleAccent: 'Tracker',
      sectionSubtitle: '現在の目標と進捗状況',
      start: '開始',
      achieved: '達成',
      milestonesComplete: 'マイルストーン完了',
      milestones: 'マイルストーン',
      target: '目標',
      items: [
        {
          id: 'french-cert',
          title: 'French Certification',
          titleJa: '仏検3級取得',
          progress: 60,
          deadline: '2026年中',
          milestones: [
            { label: '仏検4級合格', completed: true },
            { label: '基礎文法マスター', completed: true },
            { label: '単語2000語習得', completed: false },
            { label: '過去問演習完了', completed: false },
            { label: '仏検3級合格', completed: false },
          ],
          color: 'blue',
        },
        {
          id: 'aws-cert',
          title: 'AWS Cloud Practitioner',
          titleJa: 'AWSクラウドプラクティショナー取得',
          progress: 45,
          deadline: '2026年中',
          milestones: [
            { label: 'AWS基礎知識習得', completed: true },
            { label: 'EC2・S3・IAM学習完了', completed: true },
            { label: '模擬試験70%以上', completed: false },
            { label: '全範囲学習完了', completed: false },
            { label: '認定試験合格', completed: false },
          ],
          color: 'orange',
        },
      ],
    },
    en: {
      sectionTitle: 'Goal',
      sectionTitleAccent: 'Tracker',
      sectionSubtitle: 'Current goals and progress',
      start: 'Start',
      achieved: 'Achieved',
      milestonesComplete: 'Milestones Complete',
      milestones: 'Milestones',
      target: 'Target',
      items: [
        {
          id: 'french-cert',
          title: 'French Certification',
          titleJa: 'French Certification Level 3',
          progress: 60,
          deadline: '2026',
          milestones: [
            { label: 'Passed French Level 4', completed: true },
            { label: 'Mastered basic grammar', completed: true },
            { label: 'Learned 2000 vocabulary', completed: false },
            { label: 'Completed past exam practice', completed: false },
            { label: 'Passed French Level 3', completed: false },
          ],
          color: 'blue',
        },
        {
          id: 'aws-cert',
          title: 'AWS Cloud Practitioner',
          titleJa: 'AWS Cloud Practitioner Certification',
          progress: 45,
          deadline: '2026',
          milestones: [
            { label: 'Acquired AWS basics', completed: true },
            { label: 'Completed EC2, S3, IAM learning', completed: true },
            { label: 'Mock exam score 70%+', completed: false },
            { label: 'Completed all topics', completed: false },
            { label: 'Passed certification exam', completed: false },
          ],
          color: 'orange',
        },
      ],
    },
  },

  // Footer Section
  footer: {
    ja: {
      brandTitle: 'Tech × Lang × Create',
      brandDescription: 'プログラミング、フランス語、クリエイティブな活動を通じて、多角的な視点で価値を創造する大学3年生のポートフォリオサイトです。',
      navigation: 'ナビゲーション',
      connect: 'コネクト',
      copyright: 'Portfolio. All rights reserved.',
      madeWith: 'Made with',
      using: 'using React & Framer Motion',
    },
    en: {
      brandTitle: 'Tech × Lang × Create',
      brandDescription: 'Portfolio site of a university junior creating value with multiple perspectives through programming, French, and creative activities.',
      navigation: 'Navigation',
      connect: 'Connect',
      copyright: 'Portfolio. All rights reserved.',
      madeWith: 'Made with',
      using: 'using React & Framer Motion',
    },
  },
};

export type Language = 'ja' | 'en';
export type Translations = typeof translations;
