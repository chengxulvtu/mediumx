/**
 * 生成referrer
 */
export const getTwitterReferer = () => {
  let linkId = (1 + Math.random()).toString(36).substring(2, 12);
  return `https://t.co/${linkId}`;
};

/**
 * 从chrome storage获取
 * @param {*} key
 */
export const getFromChromeStorage = key => {
  chrome.storage.sync.get(["key"], function(result) {
    console.log("Value currently is " + result.key);
    return result.key;
  });
};

/**
 * 保存到chrome storage ===> Chrome会自动同步数据
 * @param {*} key
 * @param {*} value
 */
export const setForChromeStorage = (key, value) => {
  chrome.storage.sync.set({ key: value }, function() {
    console.log(`${value} is set to ${key}`);
  });
};

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
