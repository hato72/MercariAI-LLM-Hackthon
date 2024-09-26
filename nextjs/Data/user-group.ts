//DBからUser_Group情報を受け取る関数（getUser_GrpouById）


import {db} from "@/lib/db";

export const getUser_GroupByUserId = async (userId: number) => {
    try {
        console.log(`Querying user with ID: ${userId}`);
        const userGroup = await db.user_Group.findMany({
            where: {
                userId,
            },
        });
        console.log('Queried user:', userGroup);
        return userGroup;
    } catch (err) {
        console.error('Error querying user:', err);
        return null;
    }
}