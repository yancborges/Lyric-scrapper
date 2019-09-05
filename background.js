chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
	console.log('uh')
	let msg = {
		cmd: "scrap",
		title: "nice"
	}
	console.log(tab)
	chrome.tabs.sendMessage(tab.id, msg)
}

