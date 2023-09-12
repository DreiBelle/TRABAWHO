import router from "../router"

function GoSwipe_(){
    router.push("/Swipe")
}

function GoMessage_(){
    router.push("/Seeker-Message")
}

function GoProfile_(){
    router.push("/Seeker-Profile")
}

function GoHome_(){
    router.push("/home")
}

export const GoSwipe = GoSwipe_
export const GoMessage = GoMessage_
export const GoProfile = GoProfile_
export const GoHome = GoHome_