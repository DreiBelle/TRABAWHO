import router from "../router"

function GoRegister2_(userId){
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

export const GoRegister2 = GoRegister2_
export const GoRegister3 = GoRegister3_
export const goBack = goBack_
export const goTermsandCondition = goTermsandCondition_

