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
