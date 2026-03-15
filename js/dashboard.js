loadUser()

async function loadUser(){

const {data} =
await window.supabaseClient.auth.getUser()

if(!data.user){

location.href="index.html"
return

}

}

async function saveProfile(){

const user =
(await window.supabaseClient.auth.getUser()).data.user

const username=user.id.substring(0,10)

await window.supabaseClient
.from("bios")
.upsert({

username:username,

display_name:
document.getElementById("display_name").value,

bio_text:
document.getElementById("bio_text").value,

instagram:
document.getElementById("instagram").value,

tiktok:
document.getElementById("tiktok").value,

twitter:
document.getElementById("twitter").value,

youtube:
document.getElementById("youtube").value

})

alert("Perfil salvo")

}

async function loginDiscord(){

await window.supabaseClient.auth.signInWithOAuth({

provider:"discord",

options:{
redirectTo: window.location.origin + "/Nome-na-Bio/dashboard.html"
}

})

}
