import router from "../router"

function GoLogin_(){
    router.push("/Login")
}

function GoRegister_(){
    router.push("/SignUp")
}

export const GoLogin = GoLogin_
export const GoRegister = GoRegister_