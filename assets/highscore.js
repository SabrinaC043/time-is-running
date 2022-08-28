
var initials = JSON.parse(localStorage.getItem("initials"))

document.getElementById('initials').innerHTML=
`<h3>Name: ${initials}</h3>`

var score = JSON.parse(localStorage.getItem("score"))

document.getElementById('score').innerHTML=
`<h3>Score: ${score}</h3>`