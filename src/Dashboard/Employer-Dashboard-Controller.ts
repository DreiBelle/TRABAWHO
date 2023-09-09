import router from "../router"

function GoHome_(){
    router.push("/Home")
}


function GoEmployerMessage_(){
    router.push("/Employer-Message")
}

function GoEmployerHome_(){
    router.push("/Employer-Dashboard")
}

export const GoHome = GoHome_
export const GoEmployerMessage = GoEmployerMessage_
export const GoEmployerHome = GoEmployerHome_