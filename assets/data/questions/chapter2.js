// تعريف// أسئلة الفصل الثاني - الصوت التناظري والرقمي
window.chapter2Questions = [
    {
        id: 6,
        chapter: 2,
        question: "ما الفرق الرئيسي بين الصوت التناظري والرقمي؟",
        answers: [
            "التناظري مستمر والرقمي متقطع",
            "التناظري أفضل جودة من الرقمي",
            "الرقمي أقدم من التناظري",
            "لا يوجد فرق بينهما"
        ],
        correctAnswer: 0
    },
    {
        id: 7,
        chapter: 2,
        question: "ماذا يعني ADC؟",
        answers: [
            "Automatic Data Conversion",
            "Analog to Digital Converter",
            "Advanced Digital Coding",
            "Audio Data Compression"
        ],
        correctAnswer: 1
    },
    {
        id: 8,
        chapter: 2,
        question: "ما هو معدل العينات (Sample Rate) الشائع في الصوتيات؟",
        answers: [
            "22,050 Hz",
            "44,100 Hz",
            "88,200 Hz",
            "96,000 Hz"
        ],
        correctAnswer: 1
    },
    {
        id: 9,
        chapter: 2,
        question: "ما المقصود بعمق البت (Bit Depth)؟",
        answers: [
            "عدد القنوات الصوتية",
            "سرعة تسجيل الصوت",
            "عدد البتات المستخدمة لتمثيل كل عينة",
            "حجم الملف الصوتي"
        ],
        correctAnswer: 2
    },
    {
        id: 10,
        chapter: 2,
        question: "أي من هذه صيغ الصوت الرقمي؟",
        answers: [
            "Vinyl",
            "Cassette Tape",
            "MP3",
            "Analog Wire"
        ],
        correctAnswer: 2
    },
    // سيتم إضافة الأسئلة هنا
];

// دمج أسئلة الفصل الثاني مع المصفوفة العامة
if (typeof window.questions === 'undefined') {
    window.questions = [];
}
window.questions = window.questions.concat(window.chapter2Questions);
