function SetUpScrap() {
	document.getElementById('greetings').style.display = "None"; 
	alert(document.title)
	scrap(document.title) 
	document.getElementById('lyrics').style.display = "block";
}

document.getElementById('trigger').addEventListener('click', SetUpScrap);