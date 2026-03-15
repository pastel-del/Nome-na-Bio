async function loginDiscord(){

await window.supabaseClient.auth.signInWithOAuth({

provider:"discord",

options:{
redirectTo:window.location.origin+"/Nome-na-Bio/dashboard.html"
}

})

}

checkLogin()

async function checkLogin(){

const {data} =
await window.supabaseClient.auth.getSession()

if(data.session){

location.href="dashboard.html"

}

}