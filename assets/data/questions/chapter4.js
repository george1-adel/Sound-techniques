// تعريف الأسئلة كمتغير عام
// أسئلة الفصل الرابع: بناء البرنامج في VB.Net (30 اختيار متعدد + 30 صواب وخطأ)
window.chapter4Questions = [
    // --- أسئلة الاختيار من متعدد ---
    {
        id: 1,
        chapter: 4,
        question: "ما هي المرحلة التي تسبق مرحلة بناء البرنامج (Implementation) في دورة حياة البرمجيات (SLC)، والتي يُعتبر الفصل الرابع تطبيقًا عمليًا لها؟",
        answers: [
            "مرحلة التطوير (Development)",
            "مرحلة التحليل والتصميم (Analysis and Design)",
            "مرحلة التجريب (Experimentation)",
            "مرحلة التحويل إلى ملف تنفيذي"
        ],
        correctAnswer: 1,
        explanation: "تبدأ دورة حياة البرمجيات بالتحليل والتصميم، وتأتي مرحلة بناء البرنامج (التنفيذ) بعدها."
    },
    {
        id: 2,
        chapter: 4,
        question: "أي من الخصائص التالية تحدد الاسم البرمجي (الذي يستخدم في الكود) للكائن، وتعتبر ذات أهمية قصوى في البرمجة؟",
        answers: [
            "Text",
            "Caption",
            "Name",
            "Enabled"
        ],
        correctAnswer: 2,
        explanation: "خاصية Name تحدد الاسم البرمجي الفريد للكائن على مستوى النموذج، والذي يتم استخدامه للتعامل معه في التعليمات البرمجية."
    },
    {
        id: 3,
        chapter: 4,
        question: "في سياق بناء برنامج ترحيب، إذا أردت أن يتم تفعيل زر 'الإدخال' (BtEnter) فقط عندما يدخل المستخدم بيانات في مربعات النص، فما هي الخاصية التي يجب برمجتها لتكون في البداية False؟",
        answers: [
            "Visible لـ BtEnter",
            "Enabled لـ BtEnter",
            "Text لـ BtEnter",
            "TabStop لـ BtEnter"
        ],
        correctAnswer: 1,
        explanation: "خاصية Enabled هي التي تحدد ما إذا كان الكائن نشطًا أو فعالاً ويمكن أن يستجيب لمدخلات المستخدم، وتعيينها إلى False يمنع استخدامه في البداية."
    },
    {
        id: 4,
        chapter: 4,
        question: "أي من الأدوات التالية تُستخدم كوسيلة لإدخال البيانات إلى البرنامج من قبل المستخدم أثناء تشغيله؟",
        answers: [
            "Label",
            "PictureBox",
            "TextBox",
            "Timer"
        ],
        correctAnswer: 2,
        explanation: "TextBox (مربع النص) يُستخدم كوسيلة لإدخال بيانات المستخدم إلى البرنامج، ويسمح للمستخدم بالكتابة والتعديل."
    },
    {
        id: 5,
        chapter: 4,
        question: "عندما يتم الضغط على زر في واجهة المستخدم، فإن الإجراء البرمجي الذي يتم استدعاؤه تلقائيًا يسمى بـ:",
        answers: [
            "Method",
            "Event Handler",
            "Property",
            "Object"
        ],
        correctAnswer: 1,
        explanation: "معالجات الأحداث (Event Handlers) هي إجراءات فرعية (Sub procedure) يتم استدعاؤها تلقائيًا عند وقوع حدث معين مثل النقر (Click) على الزر."
    },
    {
        id: 6,
        chapter: 4,
        question: "ما هو الفرق الأساسي بين خاصية Text لكائن Label وخاصية Text لكائن TextBox من حيث قابلية التعديل أثناء تشغيل البرنامج؟",
        answers: [
            "يمكن تعديل كلاهما من قبل المستخدم",
            "لا يمكن تعديل أي منهما من قبل المستخدم",
            "يمكن تعديل Label فقط",
            "يمكن تعديل TextBox فقط من قبل المستخدم"
        ],
        correctAnswer: 3,
        explanation: "يُستخدم Label لعرض بيانات لا تتطلب تعديلاً من المستخدم، بينما TextBox يُستخدم لإدخال بيانات وتعديلها من قبل المستخدم."
    },
    {
        id: 7,
        chapter: 4,
        question: "في الكود: Label1.BackColor = Color.Transparent، ماذا تعني القيمة Color.Transparent؟",
        answers: [
            "اللون الافتراضي",
            "اللون الأبيض",
            "اللون الأسود",
            "أن خلفية الأداة شفافة"
        ],
        correctAnswer: 3,
        explanation: "تعني أن خلفية الأداة شفافة، وهي مفيدة عند وضع الأداة على نموذج يحتوي على صورة."
    },
    {
        id: 8,
        chapter: 4,
        question: "يحتوي ملف تنفيذ البرنامج (Executable file) على امتداد:",
        answers: [
            ".txt",
            ".exe",
            ".vb",
            ".prj"
        ],
        correctAnswer: 1,
        explanation: "الملف التنفيذي هو الصورة النهائية للبرنامج، ويكون بامتداد .exe."
    },
    {
        id: 9,
        chapter: 4,
        question: "ماذا يعني مصطلح 'MSIL' الذي يتم تحويل كود المصدر إليه بواسطة المترجم (Compiler) في VB.Net؟",
        answers: [
            "لغة مايكروسوفت الأساسية",
            "لغة مايكروسوفت الوسيطة (Microsoft Intermediate Language)",
            "لغة مايكروسوفت التابعة",
            "لغة الآلة المباشرة"
        ],
        correctAnswer: 1,
        explanation: "يتم تحويل البرنامج المكتوب بلغة VB.Net إلى كود وسيط يسمى MSIL لضمان استقلالية الملف التنفيذي عن نوع الحاسب."
    },
    {
        id: 10,
        chapter: 4,
        question: "عند الرغبة في تصميم تطبيق واجهة مستخدم (Windows Application) جديد في فيجوال ستوديو دوت نت، ما هو القالب (Template) الذي يجب اختياره؟",
        answers: [
            "Empty Project",
            "Web Site",
            "Class Library",
            "Windows Forms Application"
        ],
        correctAnswer: 3,
        explanation: "لاختيار مشروع واجهة مستخدم على نظام ويندوز، يتم اختيار قالب Windows Forms Application."
    },
    {
        id: 11,
        chapter: 4,
        question: "ما هي الخاصية التي يجب ضبطها عند الرغبة في تعديل النص الظاهر على واجهة زر (Button) أثناء مرحلة التصميم؟",
        answers: [
            "Name",
            "Visible",
            "Text",
            "Font"
        ],
        correctAnswer: 2,
        explanation: "خاصية Text تحدد النص الذي يظهر على الكائن، سواء كان زرًا أو صندوق نص أو غيره."
    },
    {
        id: 12,
        chapter: 4,
        question: "إذا تم تعيين خاصية RightToLeft للنموذج على القيمة True، فماذا يعني ذلك بالنسبة لتطبيق عربي؟",
        answers: [
            "أن النموذج لا يمكن تشغيله على نظام عربي",
            "أن النص داخل الكائنات سيتوسط",
            "أن تكون محاذاة الكائنات من اليمين إلى اليسار",
            "أن يتم تعطيل جميع الأدوات"
        ],
        correctAnswer: 2,
        explanation: "خاصية RightToLeft ضرورية للمبرمجين باللغة العربية، وتجعل محاذاة الكائنات والنصوص تبدأ من اليمين."
    },
    {
        id: 13,
        chapter: 4,
        question: "لإخفاء كائن (مثل صندوق صور PictureBox) برمجياً أثناء تشغيل البرنامج، يتم استخدام الطريقة (Method):",
        answers: [
            "Show()",
            "Visible = False",
            "Hide()",
            "Enabled = False"
        ],
        correctAnswer: 2,
        explanation: "يتم استخدام الطريقة (Method) Hide() لإخفاء الكائن برمجياً."
    },
    {
        id: 14,
        chapter: 4,
        question: "في أي جزء من محرر التعليمات البرمجية (Code Editor) تتم كتابة الكود الذي يرغب المبرمج في تنفيذه فعليًا عند وقوع حدث معين؟",
        answers: [
            "اسم النموذج",
            "قائمة الأحداث",
            "منطقة التعليمات البرمجية للإجراء الفرعي",
            "بداية التعليمات البرمجية للنموذج"
        ],
        correctAnswer: 2,
        explanation: "منطقة التعليمات البرمجية للإجراء الفرعي هي المنطقة الواقعة بين السطر الأول والأخير للإجراء، حيث يتم وضع الكود المراد تنفيذه."
    },
    {
        id: 15,
        chapter: 4,
        question: "ما هو الاختصار المقترح للاسم البرمجي (Name) لكائن صندوق النص (TextBox)؟",
        answers: [
            "Lbl",
            "Bt",
            "Txt",
            "Chk"
        ],
        correctAnswer: 2,
        explanation: "الاختصار المقترح لكائن TextBox هو Txt."
    },
    {
        id: 16,
        chapter: 4,
        question: "أي خاصية تُستخدم لتحديد طريقة عرض الصورة داخل كائن PictureBox (مثل التمدد أو التوسيط)؟",
        answers: [
            "Image",
            "Size",
            "SizeMode",
            "Visible"
        ],
        correctAnswer: 2,
        explanation: "خاصية SizeMode تحدد كيفية عرض الصورة داخل إطار الكائن، مثل Stretch Image أو Center."
    },
    {
        id: 17,
        chapter: 4,
        question: "عندما يقوم المبرمج بالضغط المزدوج على أداة فارغة في النموذج، فإن الحدث الافتراضي الذي يستجيب له النموذج هو:",
        answers: [
            "Click",
            "MouseHover",
            "Load",
            "Activated"
        ],
        correctAnswer: 2,
        explanation: "عند فتح محرر الكود بالضغط المزدوج على النموذج، يظهر الإجراء الفرعي الافتراضي Load."
    },
    {
        id: 18,
        chapter: 4,
        question: "لإظهار نافذة الخصائص (Properties Window) بسرعة أثناء العمل في بيئة التطوير (IDE)، يمكن استخدام مفتاح الاختصار:",
        answers: [
            "F5",
            "F1",
            "F4",
            "F7"
        ],
        correctAnswer: 2,
        explanation: "يمكن إظهار نافذة الخصائص بالضغط على مفتاح F4 من لوحة المفاتيح."
    },
    {
        id: 19,
        chapter: 4,
        question: "إذا أردنا منع المستخدم من إدخال بيانات في مربع نص معين (TextBox) أثناء التشغيل، فما هي الخاصية التي يجب تعيينها إلى False؟",
        answers: [
            "Visible",
            "BackColor",
            "Enabled",
            "TabIndex"
        ],
        correctAnswer: 2,
        explanation: "تعيين خاصية Enabled إلى False يجعل الكائن غير فعال (معطل)، ويمنع استخدامه من قبل المستخدم."
    },
    {
        id: 20,
        chapter: 4,
        question: "أي من النوافذ التالية في بيئة IDE تعرض قائمة بجميع الكائنات والأحداث الممكنة للكائن المحدد؟",
        answers: [
            "نافذة مصمم النموذج (Form Designer)",
            "نافذة الخصائص (Properties Window)",
            "محرر التعليمات البرمجية (Code Editor)",
            "مستكشف الحل (Solution Explorer)"
        ],
        correctAnswer: 2,
        explanation: "يتكون محرر التعليمات البرمجية من قائمة للكائنات وقائمة للأحداث المرتبطة بها."
    },
    {
        id: 21,
        chapter: 4,
        question: "في بيئة التطوير المتكاملة (IDE)، ما هي النافذة التي تعرض أسماء العناصر ومكونات البرنامج التي يتكون منها المشروع؟",
        answers: [
            "نافذة قائمة الأخطاء (Error List)",
            "صندوق الأدوات (Toolbox)",
            "مستكشف الحل (Solution Explorer)",
            "نافذة الخصائص (Properties Window)"
        ],
        correctAnswer: 2,
        explanation: "مستكشف الحل (Solution Explorer) يعرض كل عناصر البرنامج ومكوناته، مثل النماذج والتعليمات البرمجية."
    },
    {
        id: 22,
        chapter: 4,
        question: "ما هي الأداة التي تستخدم لإثارة حدث (Event) على فترات زمنية منتظمة (Regular intervals)؟",
        answers: [
            "Button",
            "Label",
            "Timer",
            "RichTextBox"
        ],
        correctAnswer: 2,
        explanation: "أداة المؤقت (Timer) هي المكون الذي يُثير حدثًا على فترات منتظمة."
    },
    {
        id: 23,
        chapter: 4,
        question: "أي من خواص الخط التالية تستخدم لتحديد ما إذا كان النص المكتوب يظهر بخط غامق (Bold)؟",
        answers: [
            "Size",
            "Name",
            "Bold (ضمن خاصية Font)",
            "ForeColor"
        ],
        correctAnswer: 2,
        explanation: "عند فتح مربع حوار خاصية Font، يمكن ضبط سمات الخط المختلفة مثل Bold (غامق)."
    },
    {
        id: 24,
        chapter: 4,
        question: "لضبط ترتيب انتقال المؤشر بين الأدوات باستخدام زر Tab، يتم استخدام خاصية:",
        answers: [
            "Visible",
            "Enabled",
            "TabIndex",
            "TabStop"
        ],
        correctAnswer: 2,
        explanation: "خاصية TabIndex هي قيمة رقمية تستخدم لتوضيح موقع الأداة في ترتيب الوصول بالضغط على زر Tab."
    },
    {
        id: 25,
        chapter: 4,
        question: "ما هي الخطوة التي تلي مرحلة 'كتابة التعليمات البرمجية' مباشرة في خطوات بناء البرنامج؟",
        answers: [
            "إنشاء مشروع جديد",
            "تحويل البرنامج إلى ملف تنفيذي",
            "ضبط الخصائص",
            "اختبار البرنامج"
        ],
        correctAnswer: 3,
        explanation: "تتكون الخطوات من: إنشاء مشروع، إضافة كائنات، ضبط الخصائص، كتابة التعليمات البرمجية، ثم اختبار البرنامج."
    },
    {
        id: 26,
        chapter: 4,
        question: "عند استخدام جملة برمجية لتغيير قيمة خاصية أثناء التشغيل، يتم اتباع القاعدة العامة:",
        answers: [
            "Objectname . Method",
            "Objectname . Property = Value",
            "Value = Objectname . Property",
            "Objectname = Value"
        ],
        correctAnswer: 1,
        explanation: "القاعدة هي: اسم_الكائن . الخاصية = القيمة."
    },
    {
        id: 27,
        chapter: 4,
        question: "إذا تم تعيين خاصية TabStop لكائن إلى False، فماذا يعني ذلك؟",
        answers: [
            "لا يمكن الوصول إليه مطلقًا",
            "لا يمكن الوصول إليه باستخدام الفأرة",
            "لا يمكن الوصول إليه باستخدام زر Tab",
            "يصبح الكائن غير مرئي"
        ],
        correctAnswer: 2,
        explanation: "تعني أن الأداة لن تكون في ترتيب الوصول عند الضغط على زر Tab، على الرغم من أنه يمكن النقر عليها بالفأرة."
    },
    {
        id: 28,
        chapter: 4,
        question: "أي من التالي ليس من أنواع الأخطاء (Errors) التي قد تظهر أثناء اختبار البرنامج في VB.Net؟",
        answers: [
            "أخطاء لغوية (Syntax errors)",
            "أخطاء منطقية (Semantic errors)",
            "أخطاء تنفيذ (Runtime errors)",
            "أخطاء التصميم (Design errors)"
        ],
        correctAnswer: 2,
        explanation: "المصادر تشير بشكل رئيسي إلى الأخطاء اللغوية والمنطقية في هذا السياق، بالإضافة إلى أخطاء التصميم. أخطاء التنفيذ (Runtime) هي حالة خاصة."
    },
    {
        id: 29,
        chapter: 4,
        question: "عند الرغبة في توسيط مجموعة من الكائنات أفقياً على النموذج (Form)، ما هو الأمر الذي يتم اختياره من قائمة Format؟",
        answers: [
            "Align > Lefts",
            "Horizontal Spacing",
            "Center in Form > Vertically",
            "Center in Form > Horizontally"
        ],
        correctAnswer: 3,
        explanation: "لتوسيط الكائنات أفقياً، يتم اختيار Format > Align > Center in Form > Horizontally."
    },
    {
        id: 30,
        chapter: 4,
        question: "ما هو الغرض الأساسي من تحويل البرنامج إلى ملف تنفيذي (.exe)؟",
        answers: [
            "حماية كود المصدر (Source Code) من التوزيع",
            "تسهيل توزيع البرنامج على المستخدمين",
            "عدم اضطرار المستخدم لشراء لغة البرمجة لتشغيل البرنامج",
            "جميع ما سبق"
        ],
        correctAnswer: 3,
        explanation: "الملف التنفيذي (.exe) هو الصورة النهائية المستقلة للبرنامج، وله أهمية بالغة لعدة أسباب، منها التوزيع وحماية الكود وعدم الحاجة لبيئة التطوير."
    },

    // --- أسئلة الصواب والخطأ ---
    {
        id: 31,
        chapter: 4,
        question: "لغة فيجوال بيسيك دوت نت (VB.Net) هي لغة برامج موجّهة بالكائنات (Object-Oriented Programming).",
        answers: ["صواب", "خطأ"],
        correctAnswer: 0,
        explanation: "VB.Net تدعم البرمجة الشيئية أو الموجهة بالكائنات (OOP)."
    },
    {
        id: 32,
        chapter: 4,
        question: "تقتصر عملية بناء البرنامج على كتابة التعليمات البرمجية فقط، دون الحاجة إلى ضبط خصائص الكائنات.",
        answers: ["صواب", "خطأ"],
        correctAnswer: 1,
        explanation: "عملية بناء البرنامج تمر بعدة مراحل متكاملة تشمل إنشاء المشروع، إضافة الكائنات، ضبط الخصائص، ثم كتابة التعليمات البرمجية."
    },
    {
        id: 33,
        chapter: 4,
        question: "لإضافة أداة (كائن) إلى النموذج، يمكن فقط السحب والإفلات من صندوق الأدوات (Toolbox) على النموذج.",
        answers: ["صواب", "خطأ"],
        correctAnswer: 1,
        explanation: "يمكن إضافة الكائن بالضغط المزدوج عليه في صندوق الأدوات، أو سحبه وإفلاته، أو رسمه على النموذج."
    },
    {
        id: 34,
        chapter: 4,
        question: "تُستخدم خاصية Visible لتعطيل استجابة الكائن لأي تفاعل مع المستخدم (مثل النقر أو الإدخال).",
        answers: ["صواب", "خطأ"],
        correctAnswer: 1,
        explanation: "خاصية Visible تُستخدم لإظهار أو إخفاء الكائن، أما الخاصية المسؤولة عن تعطيل الاستجابة فهي Enabled."
    },
    {
        id: 35,
        chapter: 4,
        question: "عندما تشتري أجهزة حاسب جديدة، يجب إعادة كتابة البرامج المكتوبة بلغة VB.Net بالكامل لتتوافق مع الجهاز الجديد.",
        answers: ["صواب", "خطأ"],
        correctAnswer: 1,
        explanation: "يتميز الملف التنفيذي بلغة VB.Net بالاستقلالية عن التشغيل (بفضل MSIL)، مما يضمن تشغيله على أنواع مختلفة من الأجهزة."
    },
    {
        id: 36,
        chapter: 4,
        question: "يمكن تغيير قيمة خاصية Text لكائن Button برمجياً أثناء تشغيل البرنامج.",
        answers: ["صواب", "خطأ"],
        correctAnswer: 0,
        explanation: "يمكن تغيير خصائص الكائنات أثناء التشغيل عبر كتابة التعليمات البرمجية، مثل Button1.Text = 'نص جديد'."
    },
    {
        id: 37,
        chapter: 4,
        question: "يتمثل الفرق الجوهري بين المبرمج والمستخدم في أن المبرمج هو من يكتب الكود، بينما المستخدم هو من يتعامل مع الواجهة البرمجية (الأحداث).",
        answers: ["صواب", "خطأ"],
        correctAnswer: 0,
        explanation: "تطبيقات النوافذ تتكون من أجزاء صغيرة تسمى معالجات الأحداث التي تتفاعل مع المستخدم."
    },
    {
        id: 38,
        chapter: 4,
        question: "لا يمكن استخدام الأداة Label لعرض الصور؛ فهي مخصصة للنصوص فقط.",
        answers: ["صواب", "خطأ"],
        correctAnswer: 1,
        explanation: "تُستخدم أداة Label لعرض البيانات (النصوص أو الصور) التي تمت معالجتها في صورة مخرجات."
    },
    {
        id: 39,
        chapter: 4,
        question: "للتخلص من الإجراء الفرعي الخاص بحدث معين (Event Handler)، يجب حذف اسم الحدث من قائمة الأحداث في محرر الكود.",
        answers: ["صواب", "خطأ"],
        correctAnswer: 1,
        explanation: "الإجراء الفرعي يُستدعى تلقائيًا عند وقوع الحدث. لحذفه، يجب إزالة الكود الخاص به."
    },
    {
        id: 40,
        chapter: 4,
        question: "النافذة المسماة Solution Explorer لا يمكنها عرض العناصر والمكونات التي تم حذفها من المشروع.",
        answers: ["صواب", "خطأ"],
        correctAnswer: 0,
        explanation: "تعرض النافذة عناصر البرنامج الحالية، وعند حذف عنصر نهائياً فإنه لا يظهر."
    },
    {
        id: 41,
        chapter: 4,
        question: "خاصية BackColor تدعم فقط تعيين الألوان الشفافة (Transparent) أو الألوان الصلبة (Solid Colors).",
        answers: ["صواب", "خطأ"],
        correctAnswer: 1,
        explanation: "تدعم خاصية BackColor اختيار لون خلفية من قائمة الألوان وتشمل Custom, Web, System."
    },
    {
        id: 42,
        chapter: 4,
        question: "عند كتابة كود برمجى لتغيير خاصية، يمكن استخدام الكلمة Me كبديل لاسم النموذج الحالي.",
        answers: ["صواب", "خطأ"],
        correctAnswer: 0,
        explanation: "الكلمة Me تعود على الكائن/النموذج الحالي، ويمكن استخدامها كبديل لاسم النموذج."
    },
    {
        id: 43,
        chapter: 4,
        question: "الهدف من استخدام الاختصارات في تسمية الكائنات (مثل Txt لـ TextBox) هو تسهيل قراءة وفهم وظيفة الأداة بمجرد قراءة اسمها.",
        answers: ["صواب", "خطأ"],
        correctAnswer: 0,
        explanation: "التسمية الجيدة تتكون من مقطعين: الأول يدل على نوع الكائن (الاختصار)، والثاني يدل على وظيفته."
    },
    {
        id: 44,
        chapter: 4,
        question: "لا يمكن تغيير موضع الأزرار (Buttons) في النموذج برمجياً أثناء التشغيل.",
        answers: ["صواب", "خطأ"],
        correctAnswer: 1,
        explanation: "يمكن تغيير خصائص الكائنات مثل الموقع (Location) برمجياً."
    },
    {
        id: 45,
        chapter: 4,
        question: "مرحلة اختبار البرنامج تهدف فقط إلى التأكد من خلوه من الأخطاء اللغوية.",
        answers: ["صواب", "خطأ"],
        correctAnswer: 1,
        explanation: "اختبار البرنامج يهدف إلى التأكد من صحة التعليمات البرمجية، ويتضمن الكشف عن الأخطاء اللغوية والمنطقية."
    },
    {
        id: 46,
        chapter: 4,
        question: "لفتح محرر التعليمات البرمجية (Code Editor)، يجب دائماً النقر المزدوج على الكائن المطلوب برمجته.",
        answers: ["صواب", "خطأ"],
        correctAnswer: 1,
        explanation: "يمكن فتحه عن طريق النقر المزدوج، أو من قائمة View، أو باستخدام مفتاح F7."
    },
    {
        id: 47,
        chapter: 4,
        question: "خاصية TabIndex تحدد عدد الكائنات الموجودة في النموذج.",
        answers: ["صواب", "خطأ"],
        correctAnswer: 1,
        explanation: "خاصية TabIndex تحدد ترتيب انتقال المؤشر بين الأدوات عند استخدام زر Tab."
    },
    {
        id: 48,
        chapter: 4,
        question: "If TxtName.Text <> \"\" And TxtYear.Text <> \"\" Then هي جملة تحقق من عدم ترك حقل واحد فارغ فقط.",
        answers: ["صواب", "خطأ"],
        correctAnswer: 1,
        explanation: "استخدام المعامل المنطقي And يعني أن الشرط يتحقق فقط إذا كان كلا الحقلين غير فارغين."
    },
    {
        id: 49,
        chapter: 4,
        question: "Private Sub Form_Load(...) هو الإجراء الافتراضي الذي يتم تنفيذه في نهاية تشغيل البرنامج.",
        answers: ["صواب", "خطأ"],
        correctAnswer: 1,
        explanation: "هذا الإجراء يتم تنفيذه في بداية تشغيل البرنامج وعرض النموذج."
    },
    {
        id: 50,
        chapter: 4,
        question: "عند تصميم واجهات التطبيقات التي تتضمن اللغة العربية، تُعد خاصية RightToLeft واحدة من أهم الخصائص التي يجب ضبطها.",
        answers: ["صواب", "خطأ"],
        correctAnswer: 0,
        explanation: "هذه الخاصية أساسية لدعم التطبيقات العربية، لضمان محاذاة الكائنات من اليمين لليسار."
    },
    {
        id: 51,
        chapter: 4,
        question: "المترجم (Compiler) في VB.Net يقوم بترجمة البرنامج دفعة واحدة (كاملة) قبل التنفيذ، ويقوم بفحص الأخطاء خلال هذه العملية.",
        answers: ["صواب", "خطأ"],
        correctAnswer: 0,
        explanation: "المترجم يقوم بترجمة البرنامج المصدر بالكامل إلى كود الآلة (MSIL) دفعة واحدة."
    },
    {
        id: 52,
        chapter: 4,
        question: "لا يمكن لكائن RichTextBox عرض نصوص ملونة ومخططة.",
        answers: ["صواب", "خطأ"],
        correctAnswer: 1,
        explanation: "يستخدم RichTextBox لعرض وإدخال ومعالجة النص الغني، مع إمكانية التنسيق والألوان."
    },
    {
        id: 53,
        chapter: 4,
        question: "في بيئة التطوير IDE، يمكن إخفاء النوافذ بآلية الإخفاء التلقائي (Autohide) لجعلها تظهر عند تمرير مؤشر الفأرة عليها فقط.",
        answers: ["صواب", "خطأ"],
        correctAnswer: 0,
        explanation: "خاصية Autohide تمكن من إخفاء النوافذ لتوفر مساحة عمل، وتظهر النوافذ عند تمرير مؤشر الفأرة عليها."
    },
    {
        id: 54,
        chapter: 4,
        question: "عند حفظ المشروع لأول مرة في فيجوال بيسيك، يُفضل تسمية المشروع باللغة العربية لزيادة الوضوح.",
        answers: ["صواب", "خطأ"],
        correctAnswer: 1,
        explanation: "يُفضل أن يكون الاسم باللغة الإنجليزية."
    },
    {
        id: 55,
        chapter: 4,
        question: "لتعديل خاصية Image لكائن PictureBox يجب استخدام زر Import في نافذة الخصائص لتحميل الصورة من القرص.",
        answers: ["صواب", "خطأ"],
        correctAnswer: 0,
        explanation: "يتم ذلك بالضغط على الزر المجاور لخاصية Image ثم اختيار Select Resources واختيار Import."
    },
    {
        id: 56,
        chapter: 4,
        question: "الأداة TextBox لا تدعم خاصية تعدد الأسطر (Multiple lines).",
        answers: ["صواب", "خطأ"],
        correctAnswer: 1,
        explanation: "تتمتع الأداة TextBox بخاصية Multiline التي تسمح بتعدد الأسطر."
    },
    {
        id: 57,
        chapter: 4,
        question: "في حالة إنشاء ملف تنفيذي (Execute file)، يجب على المستخدم شراء لغة البرمجة VB.Net لتشغيل البرنامج على جهازه.",
        answers: ["صواب", "خطأ"],
        correctAnswer: 1,
        explanation: "لا يضطر المستخدم إلى شراء لغة البرمجة لتشغيل الملف التنفيذي."
    },
    {
        id: 58,
        chapter: 4,
        question: "زر Save في نافذة إغلاق المشروع يقوم بحفظ المشروع وإغلاقه.",
        answers: ["صواب", "خطأ"],
        correctAnswer: 0,
        explanation: "زر Save يحفظ ويغلق البرنامج."
    },
    {
        id: 59,
        chapter: 4,
        question: "يمكن استخدام أدوات التحكم (Controls) التي تم إضافتها إلى النموذج لتصميم الواجهة والتفاعل مع المستخدم أثناء التشغيل.",
        answers: ["صواب", "خطأ"],
        correctAnswer: 0,
        explanation: "أدوات التحكم هي مكونات الواجهة التي يتم وضعها في النموذج لتصميم الواجهة وللتفاعل مع المستخدم."
    },
    {
        id: 60,
        chapter: 4,
        question: "يتم استخدام خاصية Anchor لتحديد أبعاد الكائن عند تغيير حجم النموذج (Form) أثناء التشغيل.",
        answers: ["صواب", "خطأ"],
        correctAnswer: 0,
        explanation: "وظيفة خاصية Anchor هي تحديد أبعاد الكائن عند تغيير حجم النافذة أثناء التشغيل."
    }
];

// دمج أسئلة الفصل الرابع مع المصفوفة العامة
if (typeof window.questions === 'undefined') {
    window.questions = [];
}
window.questions = window.questions.concat(window.chapter4Questions);
