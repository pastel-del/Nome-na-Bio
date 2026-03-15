async function loginDiscord(){

await window.supabaseClient.auth.signInWithOAuth({

provider:"discord",

options:{
redirectTo:window.location.origin+"/Nome-na-Bio/dashboard.html"
}

})

}
