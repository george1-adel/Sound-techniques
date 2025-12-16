// تعريف أسئلة الفصل الخامس
// أسئلة الفصل الخامس - إنتاج البرامج الصوتية
window.chapter5Questions = [
    {
        id: 21,
        chapter: 5,
        question: "ما أول مرحلة في إنتاج البرنامج الصوتي؟",
        answers: [
            "التسجيل",
            "التحرير",
            "التخطيط والإعداد",
            "النشر"
        ],
        correctAnswer: 2
    },
    {
        id: 22,
        chapter: 5,
        question: "ما هو الـ Script في البرامج الصوتية؟",
        answers: [
            "برنامج التحرير",
            "النص المكتوب المُعد مسبقاً",
            "نوع من الميكروفونات",
            "تقنية تسجيل"
        ],
        correctAnswer: 1
    },
    {
        id: 23,
        chapter: 5,
        question: "ما المقصود بـ Sound Effects (SFX)؟",
        answers: [
            "الموسيقى الخلفية",
            "صوت المذيع",
            "المؤثرات الصوتية",
            "الإعلانات"
        ],
        correctAnswer: 2
    },
    {
        id: 24,
        chapter: 5,
        question: "ما هي الموسيقى الخلفية المناسبة للبودكاست؟",
        answers: [
            "موسيقى صاخبة وسريعة",
            "موسيقى هادئة لا تشتت الانتباه",
            "بدون موسيقى إطلاقاً",
            "موسيقى عشوائية"
        ],
        correctAnswer: 1
    },
    {
        id: 25,
        chapter: 5,
        question: "ما هو Editing في إنتاج البودكاست؟",
        answers: [
            "كتابة النص",
            "تسجيل الصوت",
            "تحرير وتنقيح الملف الصوتي",
            "نشر الحلقة"
        ],
        correctAnswer: 2
    }
];

// دمج أسئلة الفصل الخامس مع المصفوفة العامة
if (typeof window.questions === 'undefined') {
    window.questions = [];
}
window.questions = window.questions.concat(window.chapter5Questions);
