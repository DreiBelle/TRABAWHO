import router from "../router"

function GoRegister_(){
    router.push("/SignUp")
}

function GoHome_(){
    router.push("/Home")
}

function GoHomeSwipeJobSeekers_(){
    router.push("/HomeSwipe-JobSeekers")
}



export const GoRegister = GoRegister_
export const GoHome = GoHome_
export const GoHomeSwipeJobSeekers = GoHomeSwipeJobSeekers_