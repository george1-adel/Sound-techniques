// تعريف أسئلة الفصل الرابع
// أسئلة الفصل الرابع - الإلقاء الصوتي
window.chapter4Questions = [
    {
        id: 16,
        chapter: 4,
        question: "ما أول خطوة في الإلقاء الصوتي الجيد؟",
        answers: [
            "استخدام ميكروفون باهظ الثمن",
            "التنفس الصحيح",
            "التحدث بسرعة",
            "رفع الصوت دائماً"
        ],
        correctAnswer: 1
    },
    {
        id: 17,
        chapter: 4,
        question: "ما هي النبرة (Tone) في الإلقاء؟",
        answers: [
            "سرعة الكلام",
            "حجم الصوت",
            "طريقة التعبير والمشاعر في الصوت",
            "وضوح الكلمات"
        ],
        correctAnswer: 2
    },
    {
        id: 18,
        chapter: 4,
        question: "لماذا يُستخدم Pop Filter أمام الميكروفون؟",
        answers: [
            "لتحسين الصوت",
            "لتقليل أصوات الـ P و B الانفجارية",
            "لزيادة حجم الصوت",
            "لتقليل الضوضاء المحيطة"
        ],
        correctAnswer: 1
    },
    {
        id: 19,
        chapter: 4,
        question: "ما المسافة المثالية بين الفم والميكروفون؟",
        answers: [
            "1-2 سم",
            "5-15 سم",
            "20-30 سم",
            "أكثر من 50 سم"
        ],
        correctAnswer: 1
    },
    {
        id: 20,
        chapter: 4,
        question: "ما هو Articulation في الإلقاء؟",
        answers: [
            "سرعة الكلام",
            "وضوح النطق",
            "حجم الصوت",
            "طبقة الصوت"
        ],
        correctAnswer: 1
    }
    // سيتم إضافة الأسئلة هنا
];

// دمج أسئلة الفصل الرابع مع المصفوفة العامة
if (typeof window.questions === 'undefined') {
    window.questions = [];
}
window.questions = window.questions.concat(window.chapter4Questions);
