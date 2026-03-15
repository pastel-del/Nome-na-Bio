const SB_URL="https://zpzdasukgdmfygajnjhn.supabase.co"
const SB_KEY="sb_publishable_zFt8CfCxjSbZkZ6QLwKG8A_Vk-Skprf"

const client=window.supabase.createClient(SB_URL,SB_KEY)

init()

async function init(){

const params=new URLSearchParams(location.search)

const user=params.get("u")

if(user){

loadProfile(user)

}

}

window.login=async function(){

await client.auth.signInWithOAuth({
provider:"discord"
})

}

async function loadProfile(username){

document.getElementById("home").classList.add("hidden")
document.getElementById("profile").classList.remove("hidden")

const {data}=await client
.from("bios")
.select("*")
.eq("username",username)
.maybeSingle()

if(!data)return

display.innerText=data.display_name||username
username.innerText="@"+data.username
bio.innerText=data.bio_text

avatar.src=data.pfp_url||
"https://ui-avatars.com/api/?name="+username

views.innerText="👁 "+data.views+" visualizações"

const socials=document.getElementById("socials")

if(data.instagram)
socials.innerHTML+=`<a href="${data.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>`

if(data.tiktok)
socials.innerHTML+=`<a href="${data.tiktok}" target="_blank"><i class="fab fa-tiktok"></i></a>`

if(data.twitter)
socials.innerHTML+=`<a href="${data.twitter}" target="_blank"><i class="fab fa-x-twitter"></i></a>`

if(data.youtube)
socials.innerHTML+=`<a href="${data.youtube}" target="_blank"><i class="fab fa-youtube"></i></a>`

if(data.facebook)
socials.innerHTML+=`<a href="${data.facebook}" target="_blank"><i class="fab fa-facebook"></i></a>`

await client.rpc("increment_views",{target_username:username})

}
