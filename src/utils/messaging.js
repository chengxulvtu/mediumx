/***
 *  content script 发送消息给 extension（background.js等）
 */
export const sendMsgFromWebPage = data => {
  chrome.runtime.sendMessage(data, function(response) {
    console.log(response.farewell);
  });
};

/**
 *  extension 发送消息给 content script
 */
export const sendMsgFromExtension = data => {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, data, function(response) {
      console.log(response.farewell);
    });
  });
};

/**
 * 返回消息
 * @param {*} filterFunc
 * @param {*} response
 */
export const receiveMsg = () => {
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(
      sender.tab
        ? "from a content script:" + sender.tab.url
        : "from the extension"
    );
  });
};
