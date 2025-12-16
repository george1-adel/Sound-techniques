// تعريف أسئلة الامتحان الشامل
window.exam1Questions = [
    // سيتم إضافة الأسئلة هنا
];

// دمج أسئلة الامتحان مع المصفوفة العامة
if (typeof window.questions === 'undefined') {
    window.questions = [];
}
window.questions = window.questions.concat(window.exam1Questions);
