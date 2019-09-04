chrome.runtime.onMessage.addListener(gotMessage)


function gotMessage(message, sender, sendResponse) {
	if(message.cmd == "scrap") {
		console.log('hey')
	}
}