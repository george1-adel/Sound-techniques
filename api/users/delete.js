import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { username } = req.body;

    // التحقق من الإدخال
    if (!username || username.trim().length === 0) {
        return res.status(400).json({ error: 'اسم المستخدم مطلوب' });
    }

    const cleanUsername = username.trim();

    try {
        // محاولة حذف المستخدم
        const deletedUser = await prisma.user.delete({
            where: { username: cleanUsername }
        });

        return res.status(200).json({
            success: true,
            message: `تم حذف المستخدم "${cleanUsername}" بنجاح`,
            deletedUser: {
                id: deletedUser.id,
                username: deletedUser.username,
                points: deletedUser.points
            }
        });
    } catch (error) {
        console.error('Database error:', error);

        // المستخدم غير موجود
        if (error.code === 'P2025') {
            return res.status(404).json({
                error: 'المستخدم غير موجود',
                username: cleanUsername
            });
        }

        return res.status(500).json({
            error: 'حدث خطأ في الخادم',
            details: error.message
        });
    }
}
