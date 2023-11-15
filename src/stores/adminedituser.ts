import { defineStore } from 'pinia';
import { db } from '@/firebaseDB';
import { doc, updateDoc } from 'firebase/firestore';

export const useeditadmin = defineStore('adminedit', {
    state: () => ({
        formData: {
            businessname: "",
            noofempl: "",
            number: "",
            contactpn: "",
            loc: "",
            mv: "",
            yearsofest: "",
            founders: "",
            facebook: "",
            twitter: "",
            instagram: "",
            companytype: "",

        },
    }),
    actions: {
        setFormData(data) {
            this.formData = { ...data };
        },
        async updateData(userid) {
            console.log(userid)
            try {
                const userRef = doc(db, 'users', userid);
                await updateDoc(userRef, this.formData);
                console.log("User updated successfully!");
                // Reset the form data after registration if needed
                this.formData = {
                    businessname: "",
                    noofempl: "",
                    number: "",
                    contactpn: "",
                    loc: "",
                    mv: "",
                    yearsofest: "",
                    founders: "",
                    facebook: "",
                    twitter: "",
                    instagram: "",
                    companytype: "",
                };
            } catch (error) {
                console.error('Error updating data:', error);
            }
        },
    },
});
