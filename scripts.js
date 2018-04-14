function sam() {
	document.getElementById("name").innerHTML = "Sam Winchester"
	document.getElementById("picture").src = "http://static.tvtropes.org/pmwiki/pub/images/samwinchester_581.jpg"
  document.getElementById("age").innerHTML = "Age: 22"
  document.getElementById("family").innerHTML = "Family: Dean Winchester (Brother), John Winchester (Father), Mary Winchester (Mother)"
  document.getElementById("actor").innerHTML = "Portrayed By Jared Padalecki"
	document.getElementById("about").innerHTML = "Sam hunts demons, spirits and other supernatural creatures with the help of his older brother Dean and occasionally with their friend and father figure Bobby Singer and, since season four, his friend the angel Castiel."
  document.getElementById("video").src = "https://www.youtube.com/embed/MpblOsqweUk"
  document.getElementById("wiki").href = "https://en.wikipedia.org/wiki/Sam_Winchester"
  document.getElementById("button").innerHTML = "Dean Winchester"
  document.getElementById("button").onclick = dean
}

function dean() {
	document.getElementById("name").innerHTML = "Dean Winchester"
	document.getElementById("picture").src = "https://vignette.wikia.nocookie.net/villains/images/c/cb/DeanWinchester.jpg/revision/latest?cb=20150705085740"
  document.getElementById("age").innerHTML = "Age: 26"
  document.getElementById("family").innerHTML = "Family: Sam Winchester (Brother), John Winchester (Father), Mary Winchester (Mother)"
  document.getElementById("actor").innerHTML = "Portrayed By Jensen Ackles"
	document.getElementById("about").innerHTML = "Dean hunts demons, spirits and other supernatural creatures with the help of his younger brother Sam and occasionally with their friend and father figure Bobby Singer and, since season four, his friend the angel Castiel."
  document.getElementById("video").src = "https://www.youtube.com/embed/BvfVEm6qkG0"
  document.getElementById("wiki").href = "https://en.wikipedia.org/wiki/Dean_Winchester"
  document.getElementById("button").innerHTML = "Sam Winchester"
   document.getElementById("button").onclick = sam
}
