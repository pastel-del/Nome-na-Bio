loadProfile()

async function loadProfile(){

const params=new URLSearchParams(location.search)

const user=params.get("u")

if(!user)return

const {data}=await window.supabaseClient
.from("bios")
.select("*")
.eq("username",user)
.single()

if(!data)return

display.innerText=data.display_name

bio.innerText=data.bio_text

if(data.instagram)
socials.innerHTML+=
`<a href="${data.instagram}">Instagram</a>`

if(data.tiktok)
socials.innerHTML+=
`<a href="${data.tiktok}">TikTok</a>`

}