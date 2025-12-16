// تعريف أسئلة الفصل الثاني
window.chapter2Questions = [
    // سيتم إضافة الأسئلة هنا
];

// دمج أسئلة الفصل الثاني مع المصفوفة العامة
if (typeof window.questions === 'undefined') {
    window.questions = [];
}
window.questions = window.questions.concat(window.chapter2Questions);
