import {
    collection,
    query,
    where,
    getDocs,
    orderBy,
    limit,
    doc,
    getDoc,
} from "firebase/firestore";
import { db } from "../firebaseDB";

async function getJobPostings_() {
    try {
        const jobPostingsRef = collection(db, "jobpost");
        const q = query(jobPostingsRef);

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            console.log("there is job posting ");
            return querySnapshot.docs.map((doc) => doc.data());
        } else {
            console.log("No job postings");
            return [];
        }
    } catch (error) {
        console.error("Error fetching job postings:", error);
        return [];
    }
}

async function getusers_() {
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef);

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            console.log("there is users ");
            return querySnapshot.docs.map((doc) => doc.data());
        } else {
            console.log("No users found ");
            return [];
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

async function getemployers_() {
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef,
            where("type", "==", "employer")
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            console.log("there is users ");
            return querySnapshot.docs.map((doc) => doc.data());
        } else {
            console.log("No users found ");
            return [];
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

async function getjobseekers_() {
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef,
            where("type", "==", "jobseeker")
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            console.log("there is users ");
            return querySnapshot.docs.map((doc) => doc.data());
        } else {
            console.log("No users found ");
            return [];
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

async function getjobseekermale_() {
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef,
            where("type", "==", "jobseeker"),
            where("gender", "==", "Male")
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            console.log("there is users ");
            return querySnapshot.docs.map((doc) => doc.data());
        } else {
            console.log("No users found ");
            return [];
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

async function getjobseekerfemale_() {
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef,
            where("type", "==", "jobseeker"),
            where("gender", "==", "Female")
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            console.log("there is users ");
            return querySnapshot.docs.map((doc) => doc.data());
        } else {
            console.log("No users found ");
            return [];
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

async function getjobseekercagayan_() {
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef,
            where("type", "==", "jobseeker"),
            where("province", "==", "Cagayan")
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            return querySnapshot.docs.map((doc) => doc.data());
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

async function getjobseekerisabela_() {
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef,
            where("type", "==", "jobseeker"),
            where("province", "==", "Isabela")
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            return querySnapshot.docs.map((doc) => doc.data());
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

async function getjobseekernuevavizcaya_() {
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef,
            where("type", "==", "jobseeker"),
            where("province", "==", "Nueva Vizcaya")
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            return querySnapshot.docs.map((doc) => doc.data());
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}
async function getjobseekerquirino_() {
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef,
            where("type", "==", "jobseeker"),
            where("province", "==", "Quirino")
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            return querySnapshot.docs.map((doc) => doc.data());
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

async function getjobseekertuguegarao_() {
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef,
            where("type", "==", "jobseeker"),
            where("citown", "==", "Tuguegarao")
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            return querySnapshot.docs.map((doc) => doc.data());
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

async function getjobseekeraparri_() {
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef,
            where("type", "==", "jobseeker"),
            where("citown", "==", "Aparri")
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            return querySnapshot.docs.map((doc) => doc.data());
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

async function getjobseekerlallo_() {
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef,
            where("type", "==", "jobseeker"),
            where("citown", "==", "La-lo")
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            return querySnapshot.docs.map((doc) => doc.data());
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

async function getjobseekergattaran_() {
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef,
            where("type", "==", "jobseeker"),
            where("citown", "==", "Gattaran")
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            return querySnapshot.docs.map((doc) => doc.data());
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

async function getjobseekerpenablanca_() {
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef,
            where("type", "==", "jobseeker"),
            where("citown", "==", "Penablanca")
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            return querySnapshot.docs.map((doc) => doc.data());
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

async function getjobseekerilagan_() {
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef,
            where("type", "==", "jobseeker"),
            where("citown", "==", "Ilagan")
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            return querySnapshot.docs.map((doc) => doc.data());
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

async function getjobseekercuayan_() {
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef,
            where("type", "==", "jobseeker"),
            where("citown", "==", "Cuayan")
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            return querySnapshot.docs.map((doc) => doc.data());
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

async function getjobseekersantiago_() {
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef,
            where("type", "==", "jobseeker"),
            where("citown", "==", "Santiago")
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            return querySnapshot.docs.map((doc) => doc.data());
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

async function getjobseekeralicia_() {
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef,
            where("type", "==", "jobseeker"),
            where("citown", "==", "Alicia")
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            return querySnapshot.docs.map((doc) => doc.data());
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

async function getjobseekerroxas_() {
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef,
            where("type", "==", "jobseeker"),
            where("citown", "==", "Roxas")
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            return querySnapshot.docs.map((doc) => doc.data());
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

async function getjobseekercabagan_() {
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef,
            where("type", "==", "jobseeker"),
            where("citown", "==", "Cabagan")
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            return querySnapshot.docs.map((doc) => doc.data());
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

async function getjobseekerbayombong_() {
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef,
            where("type", "==", "jobseeker"),
            where("citown", "==", "Bayombong")
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            return querySnapshot.docs.map((doc) => doc.data());
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

async function getjobseekersolano_() {
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef,
            where("type", "==", "jobseeker"),
            where("citown", "==", "Solano")
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            return querySnapshot.docs.map((doc) => doc.data());
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

async function getjobseekerbagabag_() {
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef,
            where("type", "==", "jobseeker"),
            where("citown", "==", "Bagabag")
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            return querySnapshot.docs.map((doc) => doc.data());
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

async function getjobseekerbambang_() {
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef,
            where("type", "==", "jobseeker"),
            where("citown", "==", "Bambang")
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            return querySnapshot.docs.map((doc) => doc.data());
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

async function getjobseekercabarroguis_() {
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef,
            where("type", "==", "jobseeker"),
            where("citown", "==", "Cabarroguis")
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            return querySnapshot.docs.map((doc) => doc.data());
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

async function getjobseekermaddela_() {
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef,
            where("type", "==", "jobseeker"),
            where("citown", "==", "Maddela")
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {

            return querySnapshot.docs.map((doc) => doc.data());
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

async function getjobseekeraglipay_() {
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef,
            where("type", "==", "jobseeker"),
            where("citown", "==", "Aglipay")
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            return querySnapshot.docs.map((doc) => doc.data());
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

async function getprivate_() {
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef,
            where("companytype", "==", "Private"),
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            return querySnapshot.docs.map((doc) => doc.data());
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

async function getgovernment_() {
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef,
            where("companytype", "==", "Government"),
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            return querySnapshot.docs.map((doc) => doc.data());
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

async function getmanpower_() {
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef,
            where("companytype", "==", "Manpower"),
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            return querySnapshot.docs.map((doc) => doc.data());
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

async function getuser1_() {
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef,
            where("aprooved", "==", false),
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            return querySnapshot.docs.map((doc) => doc.data());
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}


export const getJobPostings = getJobPostings_;
export const getusers = getusers_;
export const getemployers = getemployers_;
export const getjobseekers = getjobseekers_;
export const getjobseekermale = getjobseekermale_;
export const getjobseekerfemale = getjobseekerfemale_;
export const getjobseekercagayan = getjobseekercagayan_;
export const getjobseekerisabela = getjobseekerisabela_;
export const getjobseekernuevavizcaya = getjobseekernuevavizcaya_;
export const getjobseekerquirino = getjobseekerquirino_;

export const getjobseekertuguegarao = getjobseekertuguegarao_;
export const getjobseekeraparri = getjobseekeraparri_;
export const getjobseekerlallo = getjobseekerlallo_;
export const getjobseekergattaran = getjobseekergattaran_;
export const getjobseekerpenablanca = getjobseekerpenablanca_;
export const getjobseekerilagan = getjobseekerilagan_;
export const getjobseekercuayan = getjobseekercuayan_;
export const getjobseekersantiago = getjobseekersantiago_;
export const getjobseekeralicia = getjobseekeralicia_;
export const getjobseekerroxas = getjobseekerroxas_;
export const getjobseekercabagan = getjobseekercabagan_;
export const getjobseekerbayombong = getjobseekerbayombong_;
export const getjobseekersolano = getjobseekersolano_;
export const getjobseekerbagabag = getjobseekerbagabag_;
export const getjobseekerbambang = getjobseekerbambang_;
export const getjobseekercabarroguis = getjobseekercabarroguis_;
export const getjobseekermaddela = getjobseekermaddela_;
export const getjobseekeraglipay = getjobseekeraglipay_;
export const getprivate = getprivate_;
export const getgovernment = getgovernment_;
export const getmanpower = getmanpower_;

