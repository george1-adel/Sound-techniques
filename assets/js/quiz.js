/* ====================================
   quiz.js - منطق الاختبار
   ==================================== */

const Quiz = {
    currentQuestions: [],
    userAnswers: [],
    currentQuestionIndex: 0,
    selectedChapter: null,
    questionCount: 0,
    timerInterval: null,
    timerSeconds: 0,

    // اختيار فصل
    selectChapter(chapter) {
        this.selectedChapter = chapter;
        UI.showPage('quiz-type-select-page');
    },

    // اختيار المنهج كامل
    selectFullCurriculum() {
        this.selectedChapter = 'full';
        UI.showPage('quiz-type-select-page');
    },

    // عرض نافذة المؤقت
    showTimerModal(count) {
        this.questionCount = count;
        UI.showModal('timer-modal');
    },

    // بدء الاختبار
    startQuiz(withTimer = false) {
        UI.hideModal('timer-modal');

        // جلب الأسئلة
        let allQuestions = window.questions || [];

        if (!Array.isArray(allQuestions) || allQuestions.length === 0) {
            alert('لا توجد أسئلة!');
            return;
        }

        // تصفية الأسئلة حسب الفصل
        let filtered = [];
        if (this.selectedChapter === 'full') {
            filtered = allQuestions;
        } else {
            filtered = allQuestions.filter(q => q.chapter == this.selectedChapter);
        }

        if (filtered.length === 0) {
            alert('لا توجد أسئلة لهذا الفصل!');
            return;
        }

        // اختيار عدد الأسئلة
        if (this.questionCount === 'all' || this.questionCount >= filtered.length) {
            this.currentQuestions = [...filtered];
        } else {
            // اختيار عشوائي
            const shuffled = filtered.sort(() => Math.random() - 0.5);
            this.currentQuestions = shuffled.slice(0, this.questionCount);
        }

        // تهيئة المتغيرات
        this.userAnswers = Array(this.currentQuestions.length).fill(null);
        this.currentQuestionIndex = 0;

        // بدء المؤقت إذا طُلب
        if (withTimer) {
            this.startTimer();
        }

        // عرض الاختبار
        UI.showPage('quiz-page');
        this.displayCurrentQuestion();
    },

    // عرض السؤال الحالي
    displayCurrentQuestion() {
        const question = this.currentQuestions[this.currentQuestionIndex];
        const userAnswer = this.userAnswers[this.currentQuestionIndex];

        UI.displayQuestion(question, this.currentQuestionIndex, userAnswer);
        UI.updateProgress(this.currentQuestionIndex + 1, this.currentQuestions.length);
        UI.updateNavigationButtons(this.currentQuestionIndex, this.currentQuestions.length);
    },

    // اختيار إجابة
    selectAnswer(answerIndex) {
        this.userAnswers[this.currentQuestionIndex] = answerIndex;
        this.displayCurrentQuestion();
    },

    // السؤال التالي
    nextQuestion() {
        if (this.currentQuestionIndex < this.currentQuestions.length - 1) {
            this.currentQuestionIndex++;
            this.displayCurrentQuestion();
        }
    },

    // السؤال السابق
    prevQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayCurrentQuestion();
        }
    },

    // إنهاء الاختبار
    submitQuiz() {
        this.stopTimer();

        // حساب النتيجة
        let score = 0;
        this.currentQuestions.forEach((q, i) => {
            if (this.userAnswers[i] === q.correctAnswer) {
                score++;
            }
        });

        // إضافة النقاط
        const points = score * 2; // نقطتان لكل سؤال صح
        Storage.addPoints(points);

        // حفظ في قاعدة البيانات
        this.updateUserPoints(points);

        // عرض النتيجة
        UI.showResults(score, this.currentQuestions.length);
    },

    // تحديث نقاط المستخدم في قاعدة البيانات
    async updateUserPoints(points) {
        const username = Storage.getUsername();

        if (!username) {
            console.log('لا يوجد مستخدم محفوظ');
            return;
        }

        try {
            const response = await fetch('/api/users/update-points', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username,
                    pointsToAdd: points
                })
            });

            if (response.ok) {
                const data = await response.json();
                console.log('تم تحديث النقاط:', data.user.points);
                Storage.set('userPoints', data.user.points);
            } else {
                console.error('فشل تحديث النقاط');
            }
        } catch (error) {
            console.error('خطأ في تحديث النقاط:', error);
        }
    },

    // بدء المؤقت
    startTimer() {
        this.timerSeconds = this.questionCount === 'all'
            ? this.currentQuestions.length * 60
            : this.questionCount * 60;

        const timerDisplay = document.getElementById('timer');
        if (!timerDisplay) return;

        timerDisplay.style.display = 'block';

        this.timerInterval = setInterval(() => {
            this.timerSeconds--;

            const minutes = Math.floor(this.timerSeconds / 60);
            const seconds = this.timerSeconds % 60;

            timerDisplay.textContent = `⏱️ ${minutes}:${seconds.toString().padStart(2, '0')}`;

            if (this.timerSeconds <= 0) {
                this.submitQuiz();
            }
        }, 1000);
    },

    // إيقاف المؤقت
    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }

        const timerDisplay = document.getElementById('timer');
        if (timerDisplay) {
            timerDisplay.style.display = 'none';
        }
    }
};

// تصدير للاستخدام العام
window.Quiz = Quiz;

// دوال مساعدة للتوافق
function selectChapter(chapter) {
    Quiz.selectChapter(chapter);
}

function selectFullCurriculum() {
    Quiz.selectFullCurriculum();
}

function showTimerModal(count) {
    Quiz.showTimerModal(count);
}

function nextQuestion() {
    Quiz.nextQuestion();
}

function prevQuestion() {
    Quiz.prevQuestion();
}

function submitQuiz() {
    if (confirm('هل أنت متأكد من إنهاء الاختبار؟')) {
        Quiz.submitQuiz();
    }
}

// اختيار نوع الاختبار
function selectQuizType(type) {
    if (type === 'mcq') {
        // الذهاب لصفحة اختيار عدد الأسئلة (MCQ)
        UI.showPage('question-count-page');
    } else if (type === 'essay') {
        // تفعيل وضع Essay وإخفاء الحاوية الرئيسية
        document.body.classList.add('essay-mode');

        // تهيئة Essay Quiz مع الفصل المحدد
        if (window.EssayQuiz) {
            window.EssayQuiz.init(Quiz.selectedChapter);
        }
    }
}
