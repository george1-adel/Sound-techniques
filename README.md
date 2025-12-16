# بنية نظام الاختبارات الذكي

## الملفات الأساسية
- `index.html` - الصفحة الرئيسية
- `package.json` - Dependencies و scripts
- `vercel.json` - إعدادات Vercel
- `.env` - متغيرات البيئة (لا تُرفع على Git)
- `.env.example` - مثال لمتغيرات البيئة

## المجلدات

### `/prisma`
- `schema.prisma` - مخطط قاعدة البيانات

### `/assets`
- `/css` - ملفات الستايلات
- `/js` - ملفات JavaScript
- `/data/questions` - ملفات الأسئلة

### `/api`
- `/users` - API endpoints للمستخدمين
- `evaluate.js` - تصحيح الأسئلة المقالية بـ AI

## النشر على Vercel

### 1. إعداد قاعدة البيانات
```bash
# في Vercel Dashboard:
# Storage -> Create Database -> Postgres
# سيتم إنشاء DATABASE_URL تلقائياً
```

### 2. ضبط Environment Variables
```
DATABASE_URL=<من Vercel Postgres>
GEMINI_API_KEY=<مفتاح Gemini API>
```

### 3. Deploy
```bash
git push origin main
# أو استخدم Vercel Dashboard
```

## التطوير المحلي

### 1. تثبيت Dependencies
```bash
npm install
```

### 2. إعداد قاعدة البيانات
```bash
# تعديل .env بمعلومات قاعدة البيانات
npx prisma migrate dev
npx prisma generate
```

### 3. تشغيل الخادم
```bash
npm run dev
```

## API Endpoints

### POST /api/users/create
إنشاء أو جلب مستخدم

Request:
```json
{
  "username": "أحمد"
}
```

Response:
```json
{
  "success": true,
  "user": {
    "id": "...",
    "username": "أحمد",
    "points": 0
  }
}
```

### POST /api/users/update-points
تحديث نقاط المستخدم

Request:
```json
{
  "username": "أحمد",
  "pointsToAdd": 10
}
```

Response:
```json
{
  "success": true,
  "user": {
    "id": "...",
    "username": "أحمد",
    "points": 10
  }
}
```

### GET /api/users/[username]
جلب بيانات مستخدم

Response:
```json
{
  "success": true,
  "user": {
    "id": "...",
    "username": "أحمد",
    "points": 10,
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```
