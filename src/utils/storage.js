/**
 * 从chrome storage读取
 */
export const getFromChromeStorage = async key => {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.sync.get(key, function(result) {
        console.log("Value currently is " + JSON.stringify(result));
        resolve(result[key]);
      });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * 保存到chrome storage ===> Chrome会自动同步数据
 * @param {*} key
 * @param {*} value
 */
export const setForChromeStorage = async (key, value) => {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.sync.set({ [key]: value }, function() {
        console.log(key, value);
        resolve(key, value);
      });
    } catch (error) {
      reject(error);
    }
  });
};
