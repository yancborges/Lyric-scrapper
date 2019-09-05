chrome.runtime.onMessage.addListener(gotMessage)


function gotMessage(message, sender, sendResponse) {
	if(message.cmd === "getTitle") {
		console.log('hey')
		sendResponse = document.title
	}
}