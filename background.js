chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
	let msg = {
		cmd: 'scrap'
	}
	console.log(tab)
	chrome.tabs.sendMessage(tab.id, msg)
}

