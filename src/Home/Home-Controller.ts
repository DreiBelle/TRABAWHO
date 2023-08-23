import router from "../router"

function GoLogin_(){
    router.push("/Login")
}

function GoRegister_(){
    router.push("/SignUp")
}

function GoEmployer_(){
    router.push("/SignUpEmployer1")
}



export const GoLogin = GoLogin_
export const GoRegister = GoRegister_
export const GoEmployer = GoEmployer_