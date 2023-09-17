import router from "../router"

function GoLogin_(){
    router.push("/Login")
}

function GoHome_(){
    router.push("./home")
}

export const GoLogin = GoLogin_
export const GoHome = GoHome_
