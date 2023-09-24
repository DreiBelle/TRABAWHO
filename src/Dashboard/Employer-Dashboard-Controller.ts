import router from "../router"

function GoHome_(){
    router.push("/Home")
}

function GoEmployerMessage_(){
    router.push("/Employer-Messages")
}

function GoEmployerHome_(){
    router.push("/Employer-Dashboard")
}

function GoEmployerProfile_(){
    router.push("/Employer-Profile")
}

function GoEmployerDataAnalytics_(){
    router.push("/Employer-DataAnalytics")
}

function GoEmployerJobPostings_(){
    router.push("/Employer-JobPostings")
}

function GoEmployerNotification_(){
    router.push("/Employer-Notifications")
}

export const GoHome = GoHome_
export const GoEmployerMessage = GoEmployerMessage_
export const GoEmployerHome = GoEmployerHome_
export const GoEmployerProfile = GoEmployerProfile_
export const GoEmployerDataAnalytics = GoEmployerDataAnalytics_
export const GoEmployerJobPostings = GoEmployerJobPostings_
export const GoEmployerNotification = GoEmployerNotification_