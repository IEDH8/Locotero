const text = {

ar:{
title:"منصة Locotero للروايات",
desc:"أفضل مكان لقراءة الروايات والقصص",
login:"تسجيل الدخول"
},

en:{
title:"Locotero Stories Platform",
desc:"Best place to read stories",
login:"Login"
},

fr:{
title:"Plateforme Locotero",
desc:"Le meilleur endroit pour lire",
login:"Connexion"
},

es:{
title:"Plataforma Locotero",
desc:"El mejor lugar para leer historias",
login:"Iniciar sesión"
}

}

function changeLang(lang){

document.getElementById("title").innerText=text[lang].title
document.getElementById("desc").innerText=text[lang].desc
document.getElementById("login").innerText=text[lang].login

}
