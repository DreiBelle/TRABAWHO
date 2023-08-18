import router from "../router"

function GoRegister_(){
    router.push("/SignUp")
}

function GoHome_(){
    router.push("/Home")
}



export const GoRegister = GoRegister_
export const GoHome = GoHome_