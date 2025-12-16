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
        correctAnswer: 0,
        explanation: "الإشارة التناظرية هي موجة مستمرة تحاكي الصوت الأصلي تماماً، بينما الإشارة الرقمية هي تمثيل متقطع (عينات) للصوت يتم تحويله إلى أرقام (0 و 1)."
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
        correctAnswer: 1,
        explanation: "ADC هو اختصار لـ Analog to Digital Converter، وهو الجهاز أو الدائرة المسؤولة عن تحويل الإشارة الصوتية التناظرية (كهرباء) إلى بيانات رقمية."
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
        correctAnswer: 1,
        explanation: "المعدل 44,100 Hz (أو 44.1 kHz) هو المعيار الأكثر شيوعاً للصوت (CD Quality)، لأنه يغطي ضعف المدى السمعي للإنسان (Nyquist Theorem)."
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
        correctAnswer: 2,
        explanation: "عمق البت يحدد الدقة الديناميكية لكل عينة صوتية. كلما زاد الرقم (مثل 16-bit أو 24-bit)، زادت دقة تمثيل سعة الموجة وقلت الضوضاء."
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
        correctAnswer: 2,
        explanation: "MP3 هو صيغة ملف رقمي مضغوط، بينما الفينيل ولوكاسيت هي وسائط تخزين تناظرية."
    },
    // سيتم إضافة الأسئلة هنا
];

// دمج أسئلة الفصل الثاني مع المصفوفة العامة
if (typeof window.questions === 'undefined') {
    window.questions = [];
}
window.questions = window.questions.concat(window.chapter2Questions);
