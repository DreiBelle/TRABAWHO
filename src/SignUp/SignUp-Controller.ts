import router from "../router"

function GoRegister2_(){
    router.push("/SignUp2")
}

function GoRegister3_(){
    router.push("/SignUp3")
}

function goBack_(){
    router.go(-1)
}

function goTermsandCondition_(){
    router.push("/TermsandConditions")
}

function GoLogin_(){
    router.push("/Home")
}

function GoSwipe_(){
    router.push("/Swipe")
}

export const GoRegister2 = GoRegister2_
export const GoRegister3 = GoRegister3_
export const goBack = goBack_
export const goTermsandCondition = goTermsandCondition_
export const goLogin = GoLogin_
export const GoSwipe = GoSwipe_

