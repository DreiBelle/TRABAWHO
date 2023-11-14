import { defineStore } from 'pinia';
import { db } from '@/firebaseDB';
import { doc, updateDoc } from 'firebase/firestore';

export const aprooveUserStore = defineStore('approveStore', {
    state: () => ({
        formData: {
            aprooved: true
        },
    }),
    actions: {
        async updateData(userid) {
            try {
                const userRef = doc(db, 'users', userid);
                await updateDoc(userRef, this.formData);
                console.log("User updated successfully!");
            } catch (error) {
                console.error('Error updating data:', error);
            }
        },
    },
});
