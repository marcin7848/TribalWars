var isBotActive = true;

const changeIconBadge = (str) => {
	chrome.action.setBadgeText({text: str});
}

const toggleBot = () => {
	if(isBotActive){
		isBotActive = false;
		changeIconBadge("");
	}
	else {
		isBotActive = true;
		changeIconBadge("ON");
	}
}

 chrome.action.onClicked.addListener(async (tab) => {
	toggleBot();
	//Get All tabs
	let tabs = await chrome.tabs.query({});
	//Search for tribal wars tabs and reload them
	 tabs.forEach(t => {
		if(t.url.includes('plemiona.pl')){
			chrome.tabs.reload(t.id);
		}
	 });
});

chrome.runtime.onMessage.addListener(
	(request, sender, sendResponse) => {
		if (request.value === "getIsBotActive")
			sendResponse({isBotActive: isBotActive});
	}
);