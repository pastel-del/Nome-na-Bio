async function loadProfile(){

const params=new URLSearchParams(location.search)

const u=params.get("u")

const {data}=await window.supabaseClient
.from("bios")
.select("*")
.eq("username",u)
.single()

name.innerText=data.display_name

bio.innerText=data.bio_text

music_player.src=data.music

}

loadProfile()
