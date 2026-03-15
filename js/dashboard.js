display_name.oninput=e=>{
preview_name.innerText=e.target.value
}

bio_text.oninput=e=>{
preview_bio.innerText=e.target.value
}

avatar.onchange=function(){

const reader=new FileReader()

reader.onload=e=>{
preview_avatar.src=e.target.result
}

reader.readAsDataURL(this.files[0])

}

async function saveProfile(){

const user=(await window.supabaseClient.auth.getUser()).data.user

await window.supabaseClient
.from("bios")
.upsert({

username:user.id.substring(0,10),

display_name:display_name.value,

bio_text:bio_text.value,

music:music.value,

instagram:instagram.value,

tiktok:tiktok.value,

twitter:twitter.value,

youtube:youtube.value

})

alert("Perfil salvo")

}
