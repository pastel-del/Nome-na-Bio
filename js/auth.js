async function loginDiscord(){

await supabase.auth.signInWithOAuth({
provider: "discord",
options: {
redirectTo: window.location.origin + "/Nome-na-Bio/dashboard.html"
}
})

}
