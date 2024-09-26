//DBからUser情報を取る関数（getUserById)

import { db } from "@/lib/db";

export const getUserById = async (id: number) => {
    try {
        console.log(`Querying user with ID: ${id}`);
        const user = await db.user.findUnique({
            where: {
                id,
            },
        });
        console.log('Queried user:', user);
        return user;
    } catch (err) {
        console.error('Error querying user:', err);
        return null;
    }
}