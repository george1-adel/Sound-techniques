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

    const { username, pointsToAdd } = req.body;

    // التحقق من الإدخال
    if (!username || pointsToAdd === undefined) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    if (typeof pointsToAdd !== 'number' || pointsToAdd < 0) {
        return res.status(400).json({ error: 'Invalid points value' });
    }

    try {
        const user = await prisma.user.update({
            where: { username: username.trim() },
            data: {
                points: {
                    increment: pointsToAdd
                }
            }
        });

        return res.status(200).json({
            success: true,
            user: {
                id: user.id,
                username: user.username,
                points: user.points
            }
        });
    } catch (error) {
        console.error('Database error:', error);

        if (error.code === 'P2025') {
            return res.status(404).json({ error: 'User not found' });
        }

        return res.status(500).json({ error: 'Internal server error' });
    } finally {
        await prisma.$disconnect();
    }
}
