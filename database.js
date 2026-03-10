let stories = JSON.parse(localStorage.getItem("stories")) || []

function upload(){

let title = document.getElementById("title").value
let content = document.getElementById("content").value

stories.push({title,content})

localStorage.setItem("stories",JSON.stringify(stories))

location.href="stories.html"

}

if(document.getElementById("stories")){

let container=document.getElementById("stories")

stories.forEach((s,i)=>{

let div=document.createElement("div")
div.className="story"
div.innerHTML="<h3>"+s.title+"</h3>"

div.onclick=()=>{

localStorage.setItem("currentStory",i)

location.href="story.html"

}

container.appendChild(div)

})

}

if(document.getElementById("title") && location.pathname.includes("story")){

let i=localStorage.getItem("currentStory")

let story=stories[i]

document.getElementById("title").innerText=story.title
document.getElementById("content").innerText=story.content

}
