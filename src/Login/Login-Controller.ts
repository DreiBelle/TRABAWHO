import router from "../router"

function GoRegister_(){
    router.push("/SignUp")
}

function GoHome_(){
    router.push("/Home")
}

function GoHomeSwipeJobSeekers_(){
    router.push("/Swipe")
}

function GoEmployer_(){
    router.push("/SignUpEmployer1")
}



export const GoRegister = GoRegister_
export const GoHome = GoHome_
export const GoHomeSwipeJobSeekers = GoHomeSwipeJobSeekers_
export const GoEmployer = GoEmployer_