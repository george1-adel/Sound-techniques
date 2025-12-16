// تعريف أسئلة الفصل الثالث
// أسئلة الفصل الثالث - الصوت الرقمي
window.chapter3Questions = [
    {
        id: 11,
        chapter: 3,
        question: "ما هو الملف الصوتي WAV؟",
        answers: [
            "ملف صوتي مضغوط",
            "ملف صوتي غير مضغوط",
            "ملف فيديو",
            "ملف نصي"
        ],
        correctAnswer: 1,
        explanation: "WAV هو تنسيق صوتي قياسي غير مضغوط (Lossless/Uncompressed) يحتفظ بجميع البيانات الصوتية بجودة عالية، ولكنه ينتج ملفات كبيرة الحجم."
    },
    {
        id: 12,
        chapter: 3,
        question: "ما الفرق بين MP3 و FLAC؟",
        answers: [
            "MP3 أعلى جودة من FLAC",
            "FLAC مضغوط بدون فقدان والـ MP3 مضغوط مع فقدان",
            "لا يوجد فرق",
            "كلاهما غير مضغوط"
        ],
        correctAnswer: 1,
        explanation: "FLAC هو تنسيق ضغط بدون فقدان (Lossless) يحافظ على الجودة الكاملة، بينما MP3 هو تنسيق ضغط مع فقدان (Lossy) يضحي ببعض البيانات لتقليل الحجم بشكل كبير."
    },
    {
        id: 13,
        chapter: 3,
        question: "ما هو Bitrate في الصوت الرقمي؟",
        answers: [
            "عدد القنوات الصوتية",
            "كمية البيانات المنقولة في الثانية",
            "تردد الصوت",
            "حجم الملف"
        ],
        correctAnswer: 1,
        explanation: "معدل البت (Bitrate) هو مقياس لكمية البيانات التي تتم معالجتها أو نقلها في الثانية الواحدة (مثل 320 kbps). كلما زاد المعدل، زادت جودة الصوت وحجم الملف."
    },
    {
        id: 14,
        chapter: 3,
        question: "أي صيغة تُستخدم عادةً في البث المباشر؟",
        answers: [
            "WAV",
            "FLAC",
            "AAC أو MP3",
            "AIFF"
        ],
        correctAnswer: 2,
        explanation: "صيغ الضغط مثل AAC و MP3 هي الأنسب للبث المباشر عبر الإنترنت لأنها توفر جودة جيدة بحجم بيانات صغير، مما يوفر في استهلاك النطاق الترددي (Bandwidth)."
    },
    {
        id: 15,
        chapter: 3,
        question: "ما هو DAW؟",
        answers: [
            "Digital Audio Workstation - برنامج تحرير صوتي",
            "Direct Audio Wave",
            "Dynamic Audio Writer",
            "Digital Analog Waveform"
        ],
        correctAnswer: 0,
        explanation: "DAW (محطة عمل الصوت الرقمي) هو برنامج متكامل يستخدم لتسجيل وتحرير ومزج وإنتاج الملفات الصوتية (مثل Pro Tools, Logic Pro, Audacity)."
    }
];

// دمج أسئلة الفصل الثالث مع المصفوفة العامة
if (typeof window.questions === 'undefined') {
    window.questions = [];
}
window.questions = window.questions.concat(window.chapter3Questions);
