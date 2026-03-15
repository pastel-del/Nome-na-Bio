async function loginDiscord(){

await window.supabaseClient.auth.signInWithOAuth({

provider:"discord",

options:{
redirectTo: window.location.origin + "/dashboard.html"
}

})

}
