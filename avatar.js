
function setName(){
	document.getElementById("avatar-nome").innerHTML = document.getElementById("nome").value;
}

function setColor(cor){
	document.getElementById("avatar-cabeca").style.backgroundColor = cor;
	document.getElementById("avatar-corpo").style.backgroundColor = cor;
}

function setCabelo(cabelo){
	document.getElementById("avatar-cabelo").src = cabelo;
}

function setOculos(checked){
	if(checked){
		document.getElementById("avatar-oculos").classList.add("visivel");
	} else document.getElementById("avatar-oculos").classList.remove("visivel");
}

function setBandana(checked){

	if(checked){
		document.getElementById("avatar-bandana").classList.add("visivel");
	} else document.getElementById("avatar-bandana").classList.remove("visivel");
}

function setLacinho(checked){
	if(checked){
		document.getElementById("avatar-lacinhos").classList.add("visivel");
	} else document.getElementById("avatar-lacinhos").classList.remove("visivel");
}