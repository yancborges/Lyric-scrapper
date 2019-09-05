function SetUpScrap() {
	document.getElementById('greetings').style.visibility = "hidden"; 
	query = {active: true, currentWindow: true}
	chrome.tabs.query(query, callback)
	document.getElementById('lyrics').style.visibility = "visible";
}

function callback(tabs) {
	var currentTab = tabs[0]
	scrap(currentTab.title)
}

document.getElementById('trigger').addEventListener('click', SetUpScrap);

function scrap(title) {
	let url = ''
}