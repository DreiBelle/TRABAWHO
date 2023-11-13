import { defineStore } from 'pinia';
import { db } from '@/firebaseDB';
import { doc, deleteDoc } from 'firebase/firestore';

export const useJobStore = defineStore('jobStore', {
    actions: {
        async deleteData(jobPostId) {
          console.log("Delete")
            try {
              const jobPostRef = doc(db, 'jobpost', jobPostId);
              await deleteDoc(jobPostRef);
              console.log("Job post deleted successfully!");
            } catch (error) {
              console.error('Error deleting data:', error);
            }
          },
    },
});
